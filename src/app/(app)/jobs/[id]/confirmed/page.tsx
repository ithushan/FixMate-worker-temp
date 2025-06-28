'use client';

import { notFound, useRouter } from 'next/navigation';
import Link from 'next/link';
import { jobs } from '@/lib/mock-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, MapPin, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function JobConfirmedPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const job = jobs.find(j => j.id === params.id);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    if (!job || !job.scheduledTime) return;
    
    const scheduledTime = new Date(job.scheduledTime);
    const checkTime = () => {
      const now = new Date();
      if (now >= scheduledTime) {
        setIsButtonEnabled(true);
        if (interval) clearInterval(interval);
      }
    };

    const interval = setInterval(checkTime, 1000);
    checkTime(); // Initial check

    return () => clearInterval(interval);
  }, [job]);

  if (!job) {
    notFound();
  }
  
  if (!job.scheduledTime) {
      return (
          <div className="p-4 space-y-4 text-center">
              <h1 className="text-xl font-bold">Awaiting Confirmation</h1>
              <p className="text-muted-foreground">The customer has not scheduled a time for this job yet. We will notify you once it's confirmed.</p>
              <Button variant="outline" asChild><Link href="/dashboard">Back to Dashboard</Link></Button>
          </div>
      )
  }

  const scheduledDateTime = new Date(job.scheduledTime);

  return (
    <div className="p-4 space-y-4">
      <Button variant="ghost" asChild>
        <Link href="/dashboard"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard</Link>
      </Button>

      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Job Confirmed!</CardTitle>
          <CardDescription>You are scheduled for this job. Get ready!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">{job.title}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-3"><Calendar className="h-5 w-5 text-muted-foreground"/><div><p className="font-semibold">Date</p><p>{scheduledDateTime.toLocaleDateString()}</p></div></div>
                <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-muted-foreground"/><div><p className="font-semibold">Time</p><p>{scheduledDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p></div></div>
                <div className="flex items-center gap-3"><User className="h-5 w-5 text-muted-foreground"/><div><p className="font-semibold">Customer</p><p>{job.customer.name}</p></div></div>
                <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-muted-foreground"/><div><p className="font-semibold">Location</p><p>{job.distance}</p></div></div>
            </div>

        </CardContent>
      </Card>
      
      <Button 
        size="lg" 
        className={cn("w-full transition-all duration-300", isButtonEnabled ? "bg-accent hover:bg-accent/90" : "bg-muted text-muted-foreground")}
        disabled={!isButtonEnabled}
        onClick={() => router.push(`/jobs/${job.id}/progress`)}
      >
        {isButtonEnabled ? 'Start Job Now' : 'Waiting for Scheduled Time'}
      </Button>
    </div>
  );
}
