'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/logo';

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/welcome');
    }, 2000); // 2-second delay for splash screen

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-primary text-primary-foreground">
      <div className="animate-pulse">
        <Logo className="h-24 w-24" />
      </div>
      <h1 className="mt-4 text-3xl font-bold">FixMate Worker</h1>
    </div>
  );
}
