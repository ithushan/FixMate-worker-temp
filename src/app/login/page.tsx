import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/logo';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex items-center gap-2">
            <Logo className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">FixMate Worker</span>
          </div>
          <CardTitle className="text-2xl font-headline">Welcome Back</CardTitle>
          <CardDescription>Enter your details to log in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number or Email</Label>
              <Input id="phone" type="text" placeholder="e.g., 0771234567" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="otp">OTP Code</Label>
              <Input id="otp" type="text" placeholder="Enter the code sent to you" required />
            </div>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                <Link href="/dashboard">Login</Link>
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="font-medium text-primary hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
       <Button variant="ghost" asChild className="mt-4">
          <Link href="/welcome"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Welcome</Link>
        </Button>
    </div>
  );
}
