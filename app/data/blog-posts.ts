export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: number;
  image?: string;
}

export const blogPosts: BlogPost[] = [

/* Post 1: Getting Started with Next.js */
  {
    id: "1",
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    excerpt:
      "Learn how to set up and build your first Next.js application with modern React patterns.",
    content: `# Getting Started with Next.js

Next.js is a powerful React framework that makes building web applications easier and faster.

## Why Next.js?

Next.js provides:
- **File-based routing** - no need to configure routes manually
- **Server-side rendering (SSR)** - better SEO and performance
- **Static site generation (SSG)** - pre-render pages at build time
- **API routes** - build backend APIs alongside frontend

## Installation

Start by creating a new Next.js project:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## File Structure

Your Next.js project structure will look like:

\`\`\`
my-app/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── public/
├── package.json
└── tsconfig.json
\`\`\`

The \`app/\` directory is where your pages and routes live. Each folder with a \`page.tsx\` becomes a route.

## Next Steps

Now you're ready to start building. Explore the Next.js documentation and start creating amazing applications!`,
    date: "2026-03-15",
    author: "Bryan Wang",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop&crop=center",
  },


/* Post 2: Tailwind CSS Tips & Tricks*/
  {
    id: "2",
    slug: "tailwind-css-tips",
    title: "Tailwind CSS Tips & Tricks",
    excerpt:
      "Discover practical tips and tricks to write more efficient Tailwind CSS code.",
    content: `# Tailwind CSS Tips & Tricks

Tailwind CSS is a utility-first CSS framework that helps you build beautiful designs without leaving your HTML.

## Tip 1: Use @apply for Reusable Styles

Instead of repeating utility classes, create reusable components with \`@apply\`:

\`\`\`css
@layer components {
  .btn-primary {
    @apply px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition;
  }
}
\`\`\`

## Tip 2: Customize Your Theme

Extend Tailwind's default theme in \`tailwind.config.js\`:

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#0066cc',
      },
    },
  },
}
\`\`\`

## Tip 3: Use Responsive Prefixes

Tailwind makes responsive design easy with breakpoint prefixes:

\`\`\`html
<div class="text-sm md:text-base lg:text-lg">
  This text scales with screen size
</div>
\`\`\`

## Conclusion

Master these tips to become a Tailwind CSS pro!`,
    date: "2026-03-10",
    author: "Your Name",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop&crop=center",
    readTime: 4,
  },


/* Post 3: TypeScript Best Practices*/


  {
    id: "3",
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices",
    excerpt:
      "Learn essential TypeScript best practices for writing type-safe, maintainable code.",
    content: `# TypeScript Best Practices

TypeScript adds type safety to JavaScript, helping you catch errors early and write more reliable code.

## Best Practice 1: Use Strict Mode

Enable strict mode in \`tsconfig.json\`:

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

## Best Practice 2: Define Interfaces for Objects

Use interfaces to define the shape of objects:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(id: number): User {
  // implementation
}
\`\`\`

## Best Practice 3: Avoid \`any\` Type

Always specify types instead of using \`any\`:

\`\`\`typescript
// ❌ Avoid
function process(data: any) {}

// ✅ Better
function process(data: unknown) {}
\`\`\`

## Conclusion

Follow these practices to write cleaner, safer TypeScript code!`,
    date: "2026-03-05",
    author: "Your Name",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop&crop=center",
    readTime: 6,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
