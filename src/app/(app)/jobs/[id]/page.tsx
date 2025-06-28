import { notFound } from 'next/navigation';
import Link from 'next/link';
import { jobs } from '@/lib/mock-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, Clock, MapPin, MessageSquare, Phone } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = jobs.find(j => j.id === params.id);

  if (!job) {
    notFound();
  }
  
  // A new job is one that worker can action on. Others will redirect to their specific status pages
  if (job.status === 'confirmed') {
      // For demo, let's navigate via a button, in real app this would be a redirect.
  }

  if (job.status === 'new') {
    return (
      <div className="p-4 space-y-4">
        <Button variant="ghost" asChild>
            <Link href="/jobs"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Jobs</Link>
        </Button>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-headline">{job.title}</CardTitle>
                <CardDescription>{job.type}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {job.distance}</div>
                    <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Est. {job.estimatedTime}</div>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground">{job.description}</p>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Customer</h3>
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src={job.customer.avatarUrl} />
                            <AvatarFallback>{job.customer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium">{job.customer.name}</p>
                            <div className="flex gap-2 mt-1">
                                <Button variant="outline" size="icon" className="h-8 w-8"><MessageSquare className="h-4 w-4" /></Button>
                                <Button variant="outline" size="icon" className="h-8 w-8"><Phone className="h-4 w-4" /></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-2 pt-4">
                    <h3 className="font-semibold">Optional Message</h3>
                    <Textarea placeholder="Add a message for the customer..." />
                </div>
            </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-4">
            <Button variant="secondary" size="lg">Unavailable</Button>
            <Button className="bg-accent hover:bg-accent/90" size="lg" asChild>
                <Link href={`/jobs/${job.id}/confirmed`}>Interested</Link>
            </Button>
        </div>
      </div>
    );
  }

  // Fallback for other statuses
  const statusPageMap = {
      confirmed: 'confirmed',
      'in-progress': 'progress',
      completed: '/history', // Completed jobs are in history
      cancelled: '/jobs', // Cancelled jobs just go back to list
  }
  const targetPage = statusPageMap[job.status] || '/jobs';

  return (
      <div className="p-4 space-y-4">
        <Button variant="ghost" asChild>
            <Link href="/jobs"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Jobs</Link>
        </Button>
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-headline">{job.title}</CardTitle>
                <CardDescription>Job Status: {job.status}</CardDescription>
            </CardHeader>
             <CardContent>
                <p className="text-muted-foreground">This job is no longer new. You can view its current status below.</p>
                <Button className="mt-4 w-full" asChild>
                    <Link href={job.status === 'completed' ? targetPage : `/jobs/${job.id}/${targetPage}`}>
                        View Job Status
                    </Link>
                </Button>
            </CardContent>
        </Card>
      </div>
  )

}
