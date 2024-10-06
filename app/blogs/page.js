import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default async function Blog() {
  // Define the directory path as a variable
  const contentDir = path.join(process.cwd(), 'content');

  // Check if the directory exists
  let dirContent = [];
  if (fs.existsSync(contentDir)) {
    dirContent = fs.readdirSync(contentDir, 'utf-8');
  } else {
    console.error('Directory not found:', contentDir);
    return <div>Content directory not found!</div>;
  }

  // Process the files in the content directory
  const blogs = dirContent.map((file) => {
    const fileContent = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const { data } = matter(fileContent);
    return data;
  });

  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden dark:border-2">
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              
              <p className="mb-4">{blog.description}</p>
              
              <div className="text-sm mb-4">
                <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
              </div>
              
              <Link href={`/blogpost/${blog.slug}`} className={`${buttonVariants({ variant: "outline" })} text-background bg-foreground border border-foreground dark:border-foreground font-semibold`}>
                Click here
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
