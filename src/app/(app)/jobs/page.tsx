import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { jobs } from '@/lib/mock-data';
import { MapPin, Clock } from 'lucide-react';

export default function JobsPage() {
  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold font-headline">Browse Jobs</h1>
        <p className="text-muted-foreground">Find your next opportunity</p>
      </div>

      <div className="space-y-4">
        {jobs.map(job => (
          <Link href={`/jobs/${job.id}`} key={job.id} className="block">
            <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      <CardDescription>{job.type}</CardDescription>
                    </div>
                    <Badge variant={job.status === 'new' ? 'default' : 'secondary'} className={job.status === 'new' ? 'bg-accent text-accent-foreground' : ''}>
                      {job.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">{job.description}</p>
                   <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            <span>{job.distance}</span>
                        </div>
                         <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4" />
                            <span>Est. {job.estimatedTime}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
