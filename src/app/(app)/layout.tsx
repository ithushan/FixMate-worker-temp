import BottomNav from '@/components/bottom-nav';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      <main className="flex-grow overflow-y-auto pb-20">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
