import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/about";
import { Booking } from "@/components/site/booking";
import { BottomNav } from "@/components/site/bottom-nav";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { SessionDetails } from "@/components/site/session-details";
import { TopNav } from "@/components/site/top-nav";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="page-energy min-h-dvh overflow-x-hidden bg-bg text-fg">
      <TopNav />
      <main className="relative z-10 pb-28 md:pb-0">
        <Hero />
        <About />
        <Services />
        <SessionDetails />
        <Booking />
      </main>
      <footer className="relative z-10 border-t border-line px-5 py-10 pb-28 text-center md:pb-10">
        <p className="title-shine font-display text-lg">كابتن أحمد العلاوي</p>
        <p className="mt-2 text-sm text-subtle">جلسات مساج منزلية برايفت للرجال</p>
      </footer>
      <BottomNav />
    </div>
  );
}
