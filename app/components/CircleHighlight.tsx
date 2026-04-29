import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function CircleHighlight({ children, className = "" }: Props) {
  return (
    <span className={`relative z-[1] inline-block ${className}`}>
      {children}
      <svg
        viewBox="0 0 220 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        className="pointer-events-none absolute z-[-1] rotate-[10deg]"
        style={{
          top: "0.0em",
          right: "0.0em",
          width: "calc(100% + 0.20em)",
          height: "calc(100% + 0.20em)",
        }}
      >
        <path
          d="M110 6C166 4 212 21 212 42C212 63 164 76 108 74C52 76 8 61 10 40C12 19 54 8 110 6Z"
          stroke="#59B5F7"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
