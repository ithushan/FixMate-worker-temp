import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { jobs } from '@/lib/mock-data';
import { CheckCircle } from 'lucide-react';

export default function HistoryPage() {
    const completedJobs = jobs.filter(job => job.status === 'completed');
  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold font-headline">Job History</h1>
        <p className="text-muted-foreground">A record of your completed work</p>
      </div>

      {completedJobs.length > 0 ? (
        <div className="space-y-4">
            {completedJobs.map(job => (
            <Card key={job.id}>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-green-600">
                            <CheckCircle className="h-5 w-5" />
                            <span>Completed</span>
                        </div>
                    </div>
                     <CardDescription>{job.type}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Finished on {job.scheduledTime ? new Date(job.scheduledTime).toLocaleDateString() : 'N/A'}
                    </p>
                </CardContent>
            </Card>
            ))}
        </div>
      ) : (
        <div className="text-center py-8">
            <CheckCircle className="mx-auto h-12 w-12 text-muted-foreground" />
            <p className="mt-4 text-muted-foreground">You haven&apos;t completed any jobs yet.</p>
        </div>
      )}
    </div>
  );
}
