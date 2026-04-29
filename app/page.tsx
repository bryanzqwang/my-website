"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { StickyNav } from "@/app/components/StickyNav";
import { CircleHighlight } from "@/app/components/CircleHighlight";
import { Footer } from "@/app/components/Footer";
import { PillButton } from "@/app/components/PillButton";
import { getAllBlogPosts } from "@/app/data/blog-posts";
import { formatDateShort } from "@/app/utils/date";

export default function Home() {
  const posts = getAllBlogPosts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentPost = posts[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === posts.length - 1;

  const handlePrev = () => {
    if (!isFirst && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex - 1);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const handleNext = () => {
    if (!isLast && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">

      {/* Hero section */}
      <div className="mx-6 mt-6 sm:mx-10 sm:mt-10 lg:mx-auto lg:max-w-[1400px] lg:px-10">
        <div
          className="relative rounded-3xl bg-[#305CDE] overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <StickyNav />
          {/* Decorative blob flush bottom-right */}
          <img
            src="/Blob.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 w-[55%] z-0"
          />
          <div className="relative z-10 grid grid-cols-[1fr_1fr] items-end px-12 pt-10 lg:px-24 lg:pt-6">
            {/* Left: text */}
            <div className="pb-10 lg:pb-12">
              <h1 className="text-[5rem] font-bold text-white leading-tight tracking-tight lg:text-[6rem]">
                hey y'all, <br/> I'm <CircleHighlight>Bryan!</CircleHighlight>
              </h1>
              <p className="mt-8 text-2xl leading-normal text-white/75 lg:text-2xl">
                I bridge healthcare problems and healthtech products with data-led storytelling.
              </p>
              <a
                href="/blog"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-lg font-semibold text-[#305CDE] transition-all duration-200 hover:scale-[1.02] hover:bg-white/90"
              >
                Read more →
              </a>
            </div>
            {/* Right: profile photo flush with bottom */}
            <div className="relative h-[480px] lg:h-[530px]">
              <Image
                src="/profile_unblemished_3.png"
                alt="Bryan"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 50vw, 600px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <main className="mx-6 sm:mx-10 lg:mx-auto lg:max-w-[1400px] lg:px-10">
        {/* Blog showcase section */}
        {posts.length > 0 && (
          <section className="mt-8 px-2 py-10 sm:px-4 sm:py-14">
            <div className="grid gap-12 md:gap-20 lg:grid-cols-2 lg:items-center lg:px-16">
              {/* Left side - text description */}
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight text-[#305CDE]">
                  What I Write About
                </h2>
                <div className="space-y-4 text-base leading-8 text-zinc-600 dark:text-zinc-400">
                  <p>I write about the most important, but under-researched problems in healthcare and the technological solutions being built to solve them.</p>
                  <p>My approach isn't singularly through research and data, or stories and anecdotes, but compiles them into a statistically-satisfying, narrative whole.</p>
                  <p>As an avid reader, growth-minded professional, and man of faith, I also share my experience balancing ambition with purpose and responsibility.</p>
                </div>
                <PillButton href="/blog" label="View All Blog Posts →" />
              </div>

              {/* Right side - carousel */}
              <div className="space-y-6">
                <Link href={`/blog/${currentPost.slug}`}>
                  <div className="group relative rounded-2xl border border-zinc-200/80 bg-white/80 shadow-lg shadow-zinc-200/60 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:border-zinc-300/80 dark:border-zinc-800/80 dark:bg-zinc-900/70 dark:shadow-zinc-950/40 dark:hover:border-zinc-700/80 dark:hover:shadow-zinc-950/60 overflow-hidden cursor-pointer">
                    {currentPost.image && (
                      <div className="aspect-[2/1] relative overflow-hidden flex items-center justify-between">
                        <Image
                          src={currentPost.image}
                          alt={currentPost.title}
                          fill
                          className="object-cover transition group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        {/* Overlay arrows */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handlePrev();
                          }}
                          disabled={isFirst}
                          className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/30 backdrop-blur-md border border-white/40 transition hover:bg-white/40 disabled:opacity-30 disabled:cursor-not-allowed dark:bg-zinc-900/40 dark:hover:bg-zinc-900/60 dark:border-zinc-400/30"
                          aria-label="Previous post"
                        >
                          <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleNext();
                          }}
                          disabled={isLast}
                          className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/30 backdrop-blur-md border border-white/40 transition hover:bg-white/40 disabled:opacity-30 disabled:cursor-not-allowed dark:bg-zinc-900/40 dark:hover:bg-zinc-900/60 dark:border-zinc-400/30"
                          aria-label="Next post"
                        >
                          <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex flex-col gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-zinc-950 group-hover:text-zinc-700 dark:text-white dark:group-hover:text-zinc-300 transition line-clamp-1 min-h-[1.75rem]">
                            {currentPost.title}
                          </h3>
                          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 min-h-[2.5rem]">
                            {currentPost.excerpt}
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 pt-2">
                          <div className="flex gap-2">
                            <time>{formatDateShort(currentPost.date)}</time>
                            <span>•</span>
                            <span>{currentPost.readTime} min read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Resume / career section */}
        <section className="mt-0 px-2 py-10 sm:px-4 sm:py-14">
          <div className="grid gap-12 md:gap-20 lg:grid-cols-2 lg:items-center lg:px-16">
            {/* Left side - resume image */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/80 shadow-lg shadow-zinc-200/60 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 dark:shadow-zinc-950/40">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/Resume.svg"
                  alt="Resume"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right side - text */}
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight text-[#305CDE]">
                What I do
              </h2>
              <div className="space-y-4 text-base leading-8 text-zinc-600 dark:text-zinc-400">
                <p>
                  I solve go-to-market problems for B2B healthtech products. My work spans the entire sales funnel, from persona creation and product positioning to sales enablement and marketing, adding value at every step of the buyer's journey.
                </p>
                <p>
                  I've worked in management consulting for large health systems and am now at a Series-C healthtech company. I succeed in ambiguous, high-ownership environments through first-principles thinking, technical skills, and clear writing.
                </p>
              </div>
              <PillButton href="https://www.linkedin.com/in/bryan-wang-644849158/" label="Let's Connect →" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
