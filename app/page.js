"use client"
import { Button, buttonVariants } from "@/components/ui/button";
import Typed from 'typed.js';
import { useRef, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';

const Home = () => {

  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['#Coding', '#Web Development', '#Software Engineering', '#Data Science', '#Machine Learning', '#Artificial Intelligence', '#Cyber Security'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []); 

  return (
    <main className="bg-background dark:bg-background">
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center border-b mt-10">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-foreground dark:text-foreground md:text-4xl">
            A <span className="font-semibold">BlogPage</span> for community who<br className="hidden lg:block" /> are interested in<br/><span className="font-semibold underline decoration-primary"><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-foreground dark:text-foreground">
            Open source blog websites for those Beginner&apos;s<br className="hidden lg:block" /> who want or are developer or cyber Expert&apos;s!
          </p>
          <div className="mt-6 bg-foreground border rounded-lg dark:border-foreground lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20"></div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" width={600} height={400} className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground dark:text-foreground">Pricing Plans</h2>
            <p className="mt-4 text-lg text-foreground dark:text-foreground">Choose the plan that suits you best</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Basic Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-background rounded-lg shadow-lg dark:bg-background transform transition duration-500 hover:scale-105 text-center border border-foreground">
                <h3 className="text-2xl font-bold text-foreground dark:text-foreground">Basic</h3>
                <p className="mt-4 text-foreground dark:text-foreground">$10/month</p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-foreground dark:text-foreground"><s>10GB Storage</s></li>
                  <li className="text-foreground dark:text-foreground"><s>Basic Support</s></li>
                  <li className="text-foreground dark:text-foreground"><s>Single User</s></li>
                  <li className="text-foreground dark:text-foreground">Community Access</li>
                  <li className="text-foreground dark:text-foreground">Weekly Updates</li>
                </ul>
                <Button className="mx-1 text-background bg-foreground/90 border border-foreground font-semibold" variant="outline">Choose Plan</Button>
              </div>
            </div>
            {/* Standard Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-background rounded-lg shadow-lg dark:bg-background transform transition duration-500 hover:scale-105 text-center border-2 border-foreground">
                <h3 className="text-2xl font-semibold text-foreground dark:text-foreground">Standard</h3>
                <p className="mt-4 text-foreground dark:text-foreground">$20/month</p>
                <span className="inline-block px-3 py-1 text-sm font-bold text-background bg-foreground rounded-full">Bestseller</span>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-foreground dark:text-foreground">50GB Storage</li>
                  <li className="text-foreground dark:text-foreground">Priority Support</li>
                  <li className="text-foreground dark:text-foreground">Up to 5 Users</li>
                  <li className="text-foreground dark:text-foreground">Community Access</li>
                  <li className="text-foreground dark:text-foreground">Daily Updates</li>
                </ul>
                <Button className="mx-1 text-background bg-foreground/90 border border-foreground font-semibold" variant="outline">Choose Plan</Button>
              </div>
            </div>
            {/* Premium Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-background rounded-lg shadow-lg dark:bg-background transform transition duration-500 hover:scale-105 text-center border border-foreground">
                <h3 className="text-2xl font-bold text-foreground dark:text-foreground">Premium</h3>
                <p className="mt-4 text-foreground dark:text-foreground">$30/month</p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-foreground dark:text-foreground">200GB Storage</li>
                  <li className="text-foreground dark:text-foreground">24/7 Support</li>
                  <li className="text-foreground dark:text-foreground">Unlimited Users</li>
                  <li className="text-foreground dark:text-foreground">Community Access</li>
                  <li className="text-foreground dark:text-foreground">Real-time Updates</li>
                </ul>
                <Button className="mx-1 text-background bg-foreground/90 border border-foreground font-semibold" variant="outline">Choose Plan</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background dark:bg-background border-b border-t border-foreground">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground dark:text-foreground">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-foreground dark:text-foreground">Hear from our satisfied customers</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Testimonial 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-background rounded-lg shadow-lg dark:bg-background border border-foreground transform transition duration-500 hover:scale-105 text-center">
                <p className="text-foreground dark:text-foreground">&quot;This service has been a game-changer for our business. Highly recommend!&quot;</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">John Doe</h3>
                <p className="text-foreground dark:text-foreground">CEO, Company A</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-background rounded-lg shadow-lg dark:bg-background border border-foreground transform transition duration-500 hover:scale-105 text-center">
                <p className="text-foreground dark:text-foreground">&quot;Amazing experience! The team was professional and the results were outstanding.&quot;</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Jane Smith</h3>
                <p className="text-foreground dark:text-foreground">Marketing Director, Company B</p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-background rounded-lg shadow-lg dark:bg-background border border-foreground transform transition duration-500 hover:scale-105 text-center">
                <p className="text-foreground dark:text-foreground">&quot;Exceptional service and support. We couldn&apos;t be happier with the results.&quot;</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Michael Brown</h3>
                <p className="text-foreground dark:text-foreground">CTO, Company C</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground dark:text-foreground">Top Blogs</h2>
            <p className="mt-4 text-lg text-foreground dark:text-foreground">Check out our most popular blog posts</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-background rounded-lg shadow-lg dark:bg-background border border-foreground transform transition duration-500 hover:scale-105">
                <Image src="https://www.developer-tech.com/wp-content/uploads/2022/06/kevin-ku-w7ZyuGYNpRQ-unsplash-scaled-e1654096896796-1536x941.jpg" alt="C Programming Tutorial" width={600} height={400} className="w-full h-64 object-cover rounded-t-lg"/>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-foreground dark:text-foreground">C Programming Tutorial</h3>
                  <p className="mt-2 text-foreground dark:text-foreground">Welcome to this comprehensive C programming tutorial! Whether you&apos;re a complete beginner or looking to deepen your understanding of C, this guide will take you through the fundamentals and introduce advanced concepts as you progress.</p>
                  <Link href={`/blogpost/c-programming-tutorial`} className={`${buttonVariants({ variant: "outline" })} m-2 text-background bg-foreground/90 border border-foreground dark:border-foreground font-semibold`}>Read More</Link>
                </div>
              </div>
            </div>
            {/* Blog 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-background rounded-lg shadow-lg dark:bg-background border border-foreground transform transition duration-500 hover:scale-105">
                <Image src="https://eco-cdn.iqpc.com/eco/images/channel_content/images/apac-ai-cxWlrobHXmsW6CbmLuGuikzrBLGG5OmFhUam0MulXq.webp" alt="ChatGPT vs. Gemini" width={600} height={400} className="w-full h-64 object-cover rounded-t-lg"/>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-foreground dark:text-foreground">ChatGPT vs. Gemini</h3>
                  <p className="mt-2 text-foreground dark:text-foreground">In the realm of conversational AI, two prominent models are often discussed: OpenAI&apos;s ChatGPT and Google&apos;s Gemini. Both represent cutting-edge advancements in natural language processing, but they have different architectures, features, and use cases.</p>
                  <Link href={`/blogpost/chatgpt-vs-gemini`} className={`${buttonVariants({ variant: "outline" })} m-2 text-background bg-foreground/90 border border-foreground dark:border-foreground font-semibold`}>Read More</Link>
                </div>
              </div>
            </div>
            {/* Blog 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-background rounded-lg shadow-lg dark:bg-background border border-foreground transform transition duration-500 hover:scale-105">
                <Image src="https://c4.wallpaperflare.com/wallpaper/926/492/891/code-c-c-plus-plus-wallpaper-preview.jpg" alt="C++ Programming Tutorial" width={600} height={400} className="w-full h-64 object-cover rounded-t-lg"/>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-foreground dark:text-foreground">C++ Programming Tutorial</h3>
                  <p className="mt-2 text-foreground dark:text-foreground">Welcome to this comprehensive C++ programming tutorial! Whether you&apos;re a complete beginner or seeking to advance your C++ skills, this guide will walk you through the basics and help you dive into more advanced concepts as you progress.</p>
                  <Link href={`/blogpost/cpp-programming-tutorial`} className={`${buttonVariants({ variant: "outline" })} m-2 text-background bg-foreground/90 border border-foreground dark:border-foreground font-semibold`}>Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
