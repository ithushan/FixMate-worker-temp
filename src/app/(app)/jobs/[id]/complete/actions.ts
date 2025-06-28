'use server';

import { summarizeJob, type SummarizeJobInput } from '@/ai/flows/summarize-job-llm';

export async function generateSummaryAction(input: SummarizeJobInput) {
  try {
    const result = await summarizeJob(input);
    return result;
  } catch (error) {
    console.error('Error in generateSummaryAction:', error);
    return { error: 'Failed to generate summary due to a server error.' };
  }
}
