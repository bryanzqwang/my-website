import { PageHeader } from "@/app/components/PageHeader";
import { Footer } from "@/app/components/Footer";

export default function Newsletter() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <PageHeader title="Newsletter" subtitle="Subscribe to get updates and insights delivered to your inbox." />
      <main className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="rounded-3xl border border-zinc-200/80 bg-white/80 p-10 shadow-xl shadow-zinc-200/60 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 dark:shadow-zinc-950/40 sm:p-14">
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-400"
              required
            />
            <button
              type="submit"
              className="rounded-lg bg-zinc-950 px-6 py-3 font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
