import { getAllBlogPosts } from "@/app/data/blog-posts";
import { BlogPostCard } from "@/app/components/BlogPostCard";
import { PageHeader } from "@/app/components/PageHeader";
import { Footer } from "@/app/components/Footer";

export default function Blog() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <PageHeader title="Blog" subtitle="Thoughts on web development, design, and technology." />
      <main className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-12 text-center backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70">
            <p className="text-zinc-600 dark:text-zinc-400">
              No blog posts yet. Check back soon!
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
