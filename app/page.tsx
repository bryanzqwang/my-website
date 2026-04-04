"use client";

import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-white/70 shadow-sm dark:bg-zinc-950/65 dark:border-zinc-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-white">
          Portfolio
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
            Home
          </a>
          <a href="#about" className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
            About
          </a>
          <a href="#contact" className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/80 text-zinc-800 transition hover:border-zinc-300 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/75 dark:text-zinc-100 md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t border-white/70 bg-white/90 px-6 py-4 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/90">
          <nav className="flex flex-col gap-3">
            <a href="#home" className="text-sm font-medium text-zinc-700 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white" onClick={() => setOpen(false)}>
              Home
            </a>
            <a href="#about" className="text-sm font-medium text-zinc-700 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-zinc-700 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white" onClick={() => setOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl flex-col justify-center px-6 py-16 sm:px-10">
        <section id="home" className="rounded-3xl border border-zinc-200/80 bg-white/80 p-10 shadow-xl shadow-zinc-200/60 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 dark:shadow-zinc-950/40 sm:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
            Welcome
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
            Modern portfolio design for your next project.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            A polished, responsive landing experience with a sticky glassmorphism header built in Tailwind CSS.
          </p>
        </section>

        <section id="about" className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-zinc-200/80 bg-white/80 p-8 shadow-xl shadow-zinc-200/60 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 dark:shadow-zinc-950/40">
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">About Me</h2>
            <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-300">
              I build modern web experiences using Next.js, TypeScript, and Tailwind CSS. This portfolio layout is fully responsive and designed to work beautifully on desktop and mobile.
            </p>
          </div>
          <div className="rounded-3xl border border-zinc-200/80 bg-white/80 p-8 shadow-xl shadow-zinc-200/60 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 dark:shadow-zinc-950/40">
            <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">What I do</h3>
            <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-300">
              <li>• Create responsive UI and landing pages</li>
              <li>• Develop portfolio and personal brand sites</li>
              <li>• Craft clean, accessible React experiences</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="mt-16 rounded-3xl border border-zinc-200/80 bg-white/80 p-10 shadow-xl shadow-zinc-200/60 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 dark:shadow-zinc-950/40">
          <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">Contact</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300">
            Ready to work together? Reach out to start your next web project.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="mailto:hello@example.com" className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
              Say hello
            </a>
            <span className="text-sm text-zinc-600 dark:text-zinc-400">Or scroll back up to the navigation links above.</span>
          </div>
        </section>
      </main>
    </div>
  );
}
