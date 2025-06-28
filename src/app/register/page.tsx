import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Logo } from '@/components/logo';
import { ArrowLeft, Upload } from 'lucide-react';
import { skills } from '@/lib/mock-data';

export default function RegisterPage() {
  return (
    <div className="min-h-screen p-4 sm:p-6">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex items-center gap-2">
                <Logo className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">FixMate Worker</span>
            </div>
            <CardTitle className="text-2xl font-headline">Create Your Account</CardTitle>
            <CardDescription>Join our network of skilled professionals</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="skill">Primary Skill</Label>
              <Select>
                <SelectTrigger id="skill">
                  <SelectValue placeholder="Select your main skill" />
                </SelectTrigger>
                <SelectContent>
                  {skills.map((skill) => (
                    <SelectItem key={skill} value={skill.toLowerCase()}>{skill}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Short Bio</Label>
              <Textarea id="bio" placeholder="Tell customers a little about your experience (optional)" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Your Location</Label>
              <Input id="location" placeholder="e.g., Jaffna" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="service-area">Service Area</Label>
              <Input id="service-area" placeholder="e.g., Jaffna, Vavuniya" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="profile-photo">Profile Photo</Label>
              <Input id="profile-photo" type="file" className="text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
              <p className="text-xs text-muted-foreground">A clear headshot works best.</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="id-upload">ID for Verification</Label>
              <Input id="id-upload" type="file" className="text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
               <p className="text-xs text-muted-foreground">Upload a photo of your National ID or Driver's License.</p>
            </div>
            
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg" asChild>
              <Link href="/dashboard">Create Account</Link>
            </Button>
          </form>
           <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-primary hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
      <div className="text-center">
        <Button variant="ghost" asChild className="mt-4">
            <Link href="/welcome"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Welcome</Link>
        </Button>
      </div>
    </div>
  );
}
