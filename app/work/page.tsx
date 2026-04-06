import { Footer } from "@/app/components/Footer";

export default function Work() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="rounded-3xl border border-zinc-200/80 bg-white/80 p-10 shadow-xl shadow-zinc-200/60 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 dark:shadow-zinc-950/40 sm:p-14">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
            Work
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            Showcase your projects and work experience here.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
