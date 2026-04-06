"use client";

import { useState } from "react";

interface NavLink {
  label: string;
  href: string;
  isOutlined?: boolean;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About me", href: "/about-me" },
  { label: "Blog", href: "/blog" },
  { label: "Work", href: "/work" },
  { label: "Resume", href: "/resume" },
  { label: "Newsletter", href: "/newsletter", isOutlined: true },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/30 shadow-sm" style={{ backgroundColor: '#1e7559' }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-semibold tracking-tight text-white">
          Bryan Wang
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            link.isOutlined ? (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 transition hover:text-white"
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20 md:hidden"
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
        <div className="md:hidden border-t border-white/20 bg-[#1e7559]/95 px-6 py-4 backdrop-blur-sm">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              link.isOutlined ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="inline-block w-full rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-white/90 transition hover:text-white"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
