import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export default function WelcomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center text-center">
        <Logo className="h-24 w-24 text-primary" />
        <h1 className="mt-6 text-4xl font-bold font-headline">FixMate Worker</h1>
        <p className="mt-2 text-muted-foreground">
          Your partner in getting the job done.
        </p>
      </div>

      <div className="mt-12 w-full max-w-xs space-y-4">
        <Button asChild className="w-full" size="lg">
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild variant="secondary" className="w-full" size="lg">
          <Link href="/register">Register</Link>
        </Button>
      </div>

      <p className="mt-16 text-center text-sm text-muted-foreground">
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
}
