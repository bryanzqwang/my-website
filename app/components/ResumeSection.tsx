"use client";

import Image from "next/image";
import Link from "next/link";
import { PillButton } from "./PillButton";

export function ResumeSection() {
  return (
    <div className="grid gap-12 md:gap-20 lg:grid-cols-2 lg:items-center">
      {/* Left side - resume image */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/80 shadow-lg shadow-zinc-200/60 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 dark:shadow-zinc-950/40">
        <div className="aspect-[3/4] relative">
          <Image
            src="/resume.png"
            alt="Resume"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Right side - text */}
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
          What I do.
        </h2>
        <div className="space-y-4 text-base leading-8 text-zinc-600 dark:text-zinc-400">
          <p>
            I'm a software engineer focused on building thoughtful, high-quality products. My work spans full-stack web development, with a particular interest in clean architecture, great developer experience, and interfaces that feel effortless to use.
          </p>
          <p>
            I've worked across early-stage startups and larger teams, contributing to everything from product strategy to shipping production code. I care about the details — both in the craft of engineering and in the impact the work has on real people.
          </p>
          <p>
            Outside of work, I'm always exploring new ideas, tinkering with side projects, and looking for ways to keep growing as an engineer and a person.
          </p>
        </div>
        <PillButton href="https://www.linkedin.com/in/bryan-wang-644849158/" label="Let's Connect →" />
      </div>
    </div>
  );
}
