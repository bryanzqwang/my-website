"use client";

import Link from "next/link";

interface PillButtonProps {
  href: string;
  label: string;
  color?: string;
  hoverColor?: string;
  external?: boolean;
}

export function PillButton({
  href,
  label,
  color = "#305CDE",
  hoverColor = "#59B5F7",
  external = false,
}: PillButtonProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02]"
      style={{ backgroundColor: color }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = color)}
    >
      {label}
    </Link>
  );
}
