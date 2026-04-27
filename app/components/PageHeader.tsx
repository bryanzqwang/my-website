import { StickyNav } from "./StickyNav";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mx-6 mt-6 sm:mx-48 sm:mt-10 lg:mx-auto lg:max-w-[1400px] lg:px-10">
      <div className="rounded-3xl bg-[#305CDE] overflow-hidden">
        <StickyNav />
        <div className="px-12 pt-10 pb-10 lg:px-34 lg:pt-12 lg:pb-12">
          <h1 className="text-5xl font-bold text-white tracking-tight lg:text-6xl">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-xl text-white/75">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}
