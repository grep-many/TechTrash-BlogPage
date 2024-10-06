import Image from 'next/image';
// import React from 'react';

const ContactPage = () => {
  return (
    <main className='mt-10'>
        <div className="flex flex-col items-center justify-center py-32 bg-background dark:bg-background">
            <div className="w-full max-w-4xl p-8 bg-white dark:bg-background shadow-lg rounded-lg border border-foreground">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
                        <div className="relative w-48 h-48 rounded-full overflow-hidden">
                            <Image
                                src="https://thestrechh.github.io/images/logo.png"
                                alt="Profile"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col justify-center">
                        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
                        <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                            Hello! I&apos;m Perry, a passionate software developer and tech enthusiast. I created this blog to share my experiences, tips, and tutorials on various programming languages and technologies. I believe that learning should be a continuous journey, and I&apos;m here to help others on their path to mastering the art of coding.
                        </p>
                        <div className="flex flex-col md:flex-row md:space-x-6">
                            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                <h2 className="text-xl font-semibold mb-2">Email:</h2>
                                <p className="text-gray-600 dark:text-gray-50 text-lg">
                                    <a href="mailto:support@perry.com" className="text-foreground hover:underline">support@perry.com</a>
                                </p>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-xl font-semibold mb-2">Phone:</h2>
                                <p className="text-gray-600 dark:text-gray-50 text-lg">
                                    <a href="tel:+1234567890" className="text-foreground hover:underline">+1 (123) 456-7890</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
};

export default ContactPage;