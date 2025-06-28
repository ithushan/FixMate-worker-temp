'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Job } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { generateSummaryAction } from './actions';
import { Loader, Wand2, Upload } from 'lucide-react';

export default function CompleteJobForm({ job }: { job: Job }) {
  const router = useRouter();
  const { toast } = useToast();
  const [afterPhotoDataUri, setAfterPhotoDataUri] = useState<string | null>(null);
  const [dailyNotes, setDailyNotes] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        setAfterPhotoDataUri(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateSummary = async () => {
    if (!afterPhotoDataUri) {
      toast({
        title: 'Photo Required',
        description: 'Please upload a photo of the completed work.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setSummary('');

    const result = await generateSummaryAction({
      afterPhotoDataUri,
      dailyNotes,
      jobDescription: job.description,
    });

    setIsLoading(false);

    if (result.error) {
      toast({
        title: 'Error Generating Summary',
        description: result.error,
        variant: 'destructive',
      });
    } else if (result.summary) {
      setSummary(result.summary);
      toast({
        title: 'Summary Generated!',
        description: 'You can now review and edit the summary below.',
      });
    }
  };

  const handleMarkAsDone = () => {
    toast({
      title: 'Job Completed!',
      description: `"${job.title}" has been marked as done.`,
    });
    router.push('/dashboard');
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="after-photo">Upload After-Work Photo</Label>
            <div className="flex items-center gap-2">
                <Input id="after-photo" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                <Button asChild variant="outline">
                    <label htmlFor="after-photo" className="cursor-pointer flex items-center">
                        <Upload className="mr-2 h-4 w-4" /> Choose File
                    </label>
                </Button>
                {fileName && <span className="text-sm text-muted-foreground truncate">{fileName}</span>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="daily-notes">Final Notes</Label>
            <Textarea
              id="daily-notes"
              placeholder="Add any final notes for the job report."
              value={dailyNotes}
              onChange={(e) => setDailyNotes(e.target.value)}
              rows={4}
            />
          </div>

          <Button onClick={handleGenerateSummary} disabled={isLoading || !afterPhotoDataUri} className="w-full">
            {isLoading ? (
              <Loader className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Generate Smart Summary
          </Button>

          {summary && (
            <div className="space-y-2 pt-4">
              <Label htmlFor="summary">Generated Summary (Editable)</Label>
              <Textarea
                id="summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                rows={4}
                className="bg-primary/5 border-primary/20"
              />
            </div>
          )}
        </CardContent>
      </Card>

      <Button onClick={handleMarkAsDone} size="lg" className="w-full bg-accent hover:bg-accent/90">
        Mark as Done
      </Button>
    </div>
  );
}
