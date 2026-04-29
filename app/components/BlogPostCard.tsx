import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/app/data/blog-posts";
import { formatDateShort } from "@/app/utils/date";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group rounded-2xl border border-zinc-200/80 bg-white/80 shadow-lg shadow-zinc-200/60 backdrop-blur-xl transition hover:shadow-xl hover:border-zinc-300/80 dark:border-zinc-800/80 dark:bg-zinc-900/70 dark:shadow-zinc-950/40 dark:hover:border-zinc-700/80 dark:hover:shadow-zinc-950/60 overflow-hidden">
        {post.image && (
          <div className="aspect-[2/1] relative overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-lg font-semibold text-zinc-950 group-hover:text-zinc-700 dark:text-white dark:group-hover:text-zinc-300 transition line-clamp-1 min-h-[1.75rem]">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 min-h-[2.5rem]">
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 pt-2">
              <div className="flex gap-2">
                <time>{formatDateShort(post.date)}</time>
                <span>•</span>
                <span>{post.readTime} min read</span>
              </div>
              <span className="text-zinc-400">By {post.author}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
