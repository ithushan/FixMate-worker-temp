import { notFound } from 'next/navigation';
import { jobs } from '@/lib/mock-data';
import CompleteJobForm from './complete-form';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CompleteJobPage({ params }: { params: { id: string } }) {
  const job = jobs.find(j => j.id === params.id);

  if (!job) {
    notFound();
  }

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader className="text-center">
            <CardTitle className="text-2xl font-headline">Complete Your Job</CardTitle>
            <CardDescription>Finalize the details and get a summary of your work.</CardDescription>
        </CardHeader>
      </Card>
      <CompleteJobForm job={job} />
    </div>
  );
}
