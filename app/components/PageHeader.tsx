import { StickyNav } from "./StickyNav";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mx-6 mt-6 sm:mx-10 sm:mt-10 lg:mx-auto lg:max-w-[1400px] lg:px-10">
      <div
          className="rounded-3xl bg-[#305CDE] overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
        <StickyNav />
        <div className="px-14 pt-7 pb-10 lg:px-24 lg:pt-8 lg:pb-12">
          <h1 className="text-5xl font-bold text-white tracking-tight lg:text-6xl">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-xl text-white/75">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}
