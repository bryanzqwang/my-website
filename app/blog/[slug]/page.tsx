import Link from "next/link";
import { getBlogPost, getAllBlogPosts } from "@/app/data/blog-posts";
import { formatDate } from "@/app/utils/date";
import { notFound } from "next/navigation";
import { PageHeader } from "@/app/components/PageHeader";
import { Footer } from "@/app/components/Footer";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <PageHeader title={post.title} />
      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition"
        >
          <span>←</span>
          Back to blog
        </Link>

        <article>
          <header className="mb-8 border-b border-zinc-200/50 pb-8 dark:border-zinc-800/50">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <time className="text-zinc-600 dark:text-zinc-400">
                {formatDate(post.date)}
              </time>
              <span className="text-zinc-400">•</span>
              <span className="text-zinc-600 dark:text-zinc-400">
                {post.readTime} min read
              </span>
              <span className="text-zinc-400">•</span>
              <span className="text-zinc-600 dark:text-zinc-400">
                By {post.author}
              </span>
            </div>
          </header>

          <div className="prose dark:prose-invert max-w-none">
            <div className="whitespace-pre-wrap text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {post.content.split("\n").map((line, index) => {
                if (line.startsWith("# ")) {
                  return (
                    <h2
                      key={index}
                      className="mt-8 mb-4 text-2xl font-bold text-zinc-950 dark:text-white"
                    >
                      {line.replace(/^# /, "")}
                    </h2>
                  );
                }
                if (line.startsWith("## ")) {
                  return (
                    <h3
                      key={index}
                      className="mt-6 mb-3 text-xl font-semibold text-zinc-950 dark:text-white"
                    >
                      {line.replace(/^## /, "")}
                    </h3>
                  );
                }
                if (line.startsWith("- ")) {
                  return (
                    <li key={index} className="ml-6 text-zinc-700 dark:text-zinc-300">
                      {line.replace(/^- /, "")}
                    </li>
                  );
                }
                if (line.trim()) {
                  return (
                    <p key={index} className="mb-4 text-zinc-700 dark:text-zinc-300">
                      {line}
                    </p>
                  );
                }
                return <br key={index} />;
              })}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
