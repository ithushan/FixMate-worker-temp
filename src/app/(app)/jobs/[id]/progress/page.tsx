'use client';

import { notFound, useRouter } from 'next/navigation';
import Link from 'next/link';
import { jobs } from '@/lib/mock-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState, useEffect, useRef } from 'react';

export default function JobProgressPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const job = jobs.find(j => j.id === params.id);
  
  const [timeElapsed, setTimeElapsed] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeElapsed(prevTime => prevTime + 1);
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  if (!job) {
    notFound();
  }
  
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="p-4 space-y-4">
      <Button variant="ghost" asChild>
        <Link href="/dashboard"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard</Link>
      </Button>

      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-headline flex items-center justify-center gap-2">
            <Clock className="h-6 w-6 animate-spin-slow" />
            Job In Progress
          </CardTitle>
          <CardDescription>{job.title}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-muted-foreground">Time Elapsed</p>
            <p className="text-4xl font-bold font-mono">{formatTime(timeElapsed)}</p>
          </div>
          
          <div className="text-left space-y-2">
            <Label htmlFor="daily-notes" className="font-semibold">Daily Notes (Optional)</Label>
            <Textarea id="daily-notes" placeholder="Add any notes about your progress, materials used, or issues encountered..." rows={5} />
          </div>

        </CardContent>
      </Card>
      
      <Button 
        size="lg" 
        className="w-full bg-primary hover:bg-primary/90"
        onClick={() => router.push(`/jobs/${job.id}/complete`)}
      >
        Complete Job
      </Button>
    </div>
  );
}
