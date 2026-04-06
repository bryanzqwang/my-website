"use client";

import { useState } from "react";
import Image from "next/image";
import { BlogPost, getAllBlogPosts } from "@/app/data/blog-posts";
import { formatDateShort } from "@/app/utils/date";
import Link from "next/link";

export function BlogCarousel() {
  const posts = getAllBlogPosts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  if (posts.length === 0) return null;

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
    <div className="grid gap-12 md:gap-20 lg:grid-cols-2 lg:items-center">
      {/* Left side - text description */}
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
          What I Write About.
        </h2>
        <div className="space-y-4 text-base leading-8 text-zinc-600 dark:text-zinc-400">
          <p>
            I write about web development, modern React patterns, TypeScript best practices, and the tools and techniques that help me build better applications.
          </p>
          <p>
            Whether it's exploring new frameworks, sharing lessons learned, or diving deep into technical concepts, my goal is to help developers like you stay informed and inspired.
          </p>
          <p>
            Explore my latest thoughts and join the discussion on topics that matter in today's web development landscape.
          </p>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02]"
          style={{ backgroundColor: "#1e7559" }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#2da27c")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1e7559")}
        >
          View All Blog Posts →
        </Link>
      </div>

      {/* Right side - carousel */}
      <div className="space-y-6">
        {/* Blog post card */}
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
                        <svg
                          className="h-5 w-5 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
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
                        <svg
                          className="h-5 w-5 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex flex-col gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-950 group-hover:text-zinc-700 dark:text-white dark:group-hover:text-zinc-300 transition line-clamp-2">
                          {currentPost.title}
                        </h3>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
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
  );
}
