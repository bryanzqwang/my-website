import { HeroSection } from "@/app/components/HeroSection";
import { BlogCarousel } from "@/app/components/BlogCarousel";
import { ResumeSection } from "@/app/components/ResumeSection";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <HeroSection />

      <main className="mx-6 sm:mx-48 lg:mx-auto lg:max-w-[1400px] lg:px-10">
        {/* Blog showcase section */}
        <section className="mt-20 px-2 py-10 sm:px-4 sm:py-14">
          <BlogCarousel />
        </section>

        {/* Resume / career section */}
        <section className="mt-20 px-2 py-10 sm:px-4 sm:py-14">
          <ResumeSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
