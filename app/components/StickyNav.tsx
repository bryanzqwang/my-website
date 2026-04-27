"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Work", href: "/work" },
  { label: "Resume", href: "/resume" },
  { label: "Newsletter", href: "/newsletter", isOutlined: true },
];

export function StickyNav() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="py-6 px-14 lg:px-24 flex items-center">
        <a href="/" className="flex-1 font-serif text-3xl tracking-tight text-white">
          Bryan Wang
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.filter((l) => !l.isOutlined).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-white/85 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 justify-end">
          <a
            href="/newsletter"
            className="hidden md:inline-flex items-center rounded-full border border-white/40 px-5 py-[0.6rem] text-lg font-medium text-white transition hover:bg-white/10"
          >
            Newsletter
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/20 px-10 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-white/90 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
