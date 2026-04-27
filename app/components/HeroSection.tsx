import Image from "next/image";
import { StickyNav } from "./StickyNav";

export function HeroSection() {
  return (
    <div className="mx-6 mt-6 sm:mx-48 sm:mt-10 lg:mx-auto lg:max-w-[1400px] lg:px-10">
      <div className="rounded-3xl bg-[#305CDE] overflow-hidden">
        <StickyNav />

        {/* Hero content: two equal columns */}
        <div className="grid grid-cols-[1fr_1fr] items-end px-12 pt-10 lg:px-24 lg:pt-8">

          {/* Left: text */}
          <div className="pb-10 lg:pb-12">
            <h1 className="text-[5rem] font-bold text-white leading-tight tracking-tight lg:text-[6rem]">
              hey y&apos;all, <br/> I'm Bryan!
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
              src="/profile_unblemished_2.png"
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
  );
}
