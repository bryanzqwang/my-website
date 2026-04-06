import { BlogCarousel } from "@/app/components/BlogCarousel";
import { ResumeSection } from "@/app/components/ResumeSection";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <section className="rounded-3xl border border-zinc-200/80 bg-white/80 p-10 shadow-xl shadow-zinc-200/60 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 dark:shadow-zinc-950/40 sm:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
            Welcome
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
            Hi, I'm Bryan!
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            A polished, responsive landing experience with a sticky glassmorphism header built in Tailwind CSS.
          </p>
        </section>

        {/* Blog showcase section */}
        <section className="mt-20 px-2 py-10 sm:px-4 sm:py-14">
          <BlogCarousel />
        </section>

        {/* Resume / career section */}
        <section className="mt-20 px-2 py-10 sm:px-4 sm:py-14">
          <ResumeSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
