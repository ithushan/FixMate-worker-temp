'use server';

/**
 * @fileOverview A Genkit flow to summarize job details for workers after completing a job.
 *
 * - summarizeJob - A function that takes job details and generates a summary.
 * - SummarizeJobInput - The input type for the summarizeJob function.
 * - SummarizeJobOutput - The return type for the summarizeJob function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeJobInputSchema = z.object({
  afterPhotoDataUri: z
    .string()
    .describe(
      "A photo taken after the job is complete, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  dailyNotes: z
    .string()
    .describe('Any notes taken during the job by the worker.'),
  jobDescription: z.string().describe('The original job description.'),
});
export type SummarizeJobInput = z.infer<typeof SummarizeJobInputSchema>;

const SummarizeJobOutputSchema = z.object({
  summary: z.string().describe('A short summary of the work done.'),
});
export type SummarizeJobOutput = z.infer<typeof SummarizeJobOutputSchema>;

export async function summarizeJob(input: SummarizeJobInput): Promise<SummarizeJobOutput> {
  return summarizeJobFlow(input);
}

const summarizeJobPrompt = ai.definePrompt({
  name: 'summarizeJobPrompt',
  input: {schema: SummarizeJobInputSchema},
  output: {schema: SummarizeJobOutputSchema},
  prompt: `You are an expert summarizer for workers who have just completed a job. Your goal is to provide a short, concise summary of the work performed that the worker can send to the customer.

  Here are the details of the job:
  Original Job Description: {{{jobDescription}}}
  Daily Notes: {{{dailyNotes}}}
  After Photo: {{media url=afterPhotoDataUri}}

  Please generate a summary of the work done, incorporating details from the daily notes and the after photo. The summary should be no more than two sentences.`,
});

const summarizeJobFlow = ai.defineFlow(
  {
    name: 'summarizeJobFlow',
    inputSchema: SummarizeJobInputSchema,
    outputSchema: SummarizeJobOutputSchema,
  },
  async input => {
    const {output} = await summarizeJobPrompt(input);
    return output!;
  }
);
