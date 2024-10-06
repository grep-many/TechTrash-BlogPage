import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import OnThisPage from "@/components/onthispage";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

// Generate the static parameters for each blog post
export async function generateStaticParams() {
  // Get all markdown files in the content folder
  const files = fs.readdirSync(path.join("content"));

  // Extract the slug from the filename
  const slugs = files.map((file) => ({
    slug: file.replace(".md", ""),
  }));

  return slugs; // Return slugs for static generation
}

export default async function Page({ params }) {
  const filepath = `content/${params.slug}.md`;

  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-full sm:max-w-6xl mx-auto p-4 mt-12 sm:mt-20">
      {/* Blog title */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">{data.title}</h1>

      {/* Blog description */}
      <p className="text-sm sm:text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
        &quot;{data.description}&quot;
      </p>

      {/* Author and date container */}
      <div className="flex flex-col sm:flex-row sm:gap-2 text-xs sm:text-sm text-gray-500 mb-4">
        <p className="italic">By {data.author}</p>
        <p>{data.date}</p>
      </div>

      {/* Blog content */}
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose prose-sm sm:prose dark:prose-invert"
      ></div>
      <OnThisPage htmlContent={htmlContent}/>
    </div>
  );
}
