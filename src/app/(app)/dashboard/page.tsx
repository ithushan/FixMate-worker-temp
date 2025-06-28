import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { jobs, workerProfile } from "@/lib/mock-data";
import { ArrowRight, Briefcase, MapPin, Clock, DollarSign, CheckCircle, Star } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const newJobs = jobs.filter(job => job.status === 'new' || job.status === 'confirmed');
  const completedJobs = jobs.filter(job => job.status === 'completed');
  const weeklyEarnings = completedJobs.reduce((total, job) => total + (job.earnings || 0), 0);
  const jobsCompletedCount = completedJobs.length;
  // The rating is available in workerProfile in reviews page, but let's hardcode it for simplicity on dashboard
  const rating = 4.8;

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold font-headline">Welcome, {workerProfile.name.split(' ')[0]}!</h1>
          <p className="text-muted-foreground">Here&apos;s what&apos;s new today.</p>
        </div>
        <Avatar>
          <AvatarImage src={workerProfile.profilePhotoUrl} alt={workerProfile.name} />
          <AvatarFallback>{workerProfile.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>

      <Card>
        <CardHeader>
            <CardTitle className="text-lg font-headline">Your Week at a Glance</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-4 text-center">
            <div>
                <DollarSign className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xl font-bold">LKR {weeklyEarnings.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Earnings</p>
            </div>
             <div>
                <CheckCircle className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xl font-bold">{jobsCompletedCount}</p>
                <p className="text-xs text-muted-foreground">Jobs Done</p>
            </div>
            <div>
                <Star className="h-6 w-6 mx-auto mb-2 text-accent fill-accent" />
                <p className="text-xl font-bold">{rating}</p>
                <p className="text-xs text-muted-foreground">Rating</p>
            </div>
        </CardContent>
      </Card>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-4 flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="availability-toggle" className="text-lg font-semibold">Your Availability</Label>
            <p className="text-sm text-muted-foreground">You are currently Online.</p>
          </div>
          <Switch id="availability-toggle" defaultChecked className="data-[state=checked]:bg-accent" />
        </CardContent>
      </Card>
      
      <div>
        <h2 className="text-xl font-bold font-headline mb-4">New Job Requests</h2>
        {newJobs.length > 0 ? (
          <div className="space-y-4">
            {newJobs.map(job => (
              <Link href={`/jobs/${job.id}`} key={job.id} className="block">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <CardDescription>{job.type}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{job.distance}</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>Est. {job.estimatedTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Briefcase className="mx-auto h-12 w-12 text-muted-foreground" />
            <p className="mt-4 text-muted-foreground">No new jobs right now. We&apos;ll notify you!</p>
          </div>
        )}
      </div>

      <Button variant="outline" className="w-full" asChild>
        <Link href="/jobs">Browse All Jobs <ArrowRight className="ml-2 h-4 w-4" /></Link>
      </Button>
    </div>
  );
}
