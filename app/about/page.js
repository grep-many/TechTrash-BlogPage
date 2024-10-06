import Image from 'next/image';

export default function About() {
  return (
    <div>
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
              <h1 className="text-4xl font-bold mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Hello! I&apos;m Perry, a passionate software developer and tech enthusiast. I created this blog to share my experiences, tips, and tutorials on various programming languages and technologies. I believe that learning should be a continuous journey, and I&apos;m here to help others on their path to mastering the art of coding.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                Whether you&apos;re just starting out or looking to sharpen your skills, you&apos;ll find a variety of resources and insights here. Let&apos;s explore the world of programming together!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-background dark:bg-background dark:text-white border-t border-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Perry&apos;s Journey as a Coder</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              From curious beginner to seasoned developer, here&apos;s how Perry navigated the world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ba105dd-5ce6-4083-baa9-1deaf2130018/d5cgysr-927b71bd-0637-48b9-a96d-6fff6573ed95.jpg/v1/fill/w_900,h_563,q_75,strp/doctor_who_platypus__wallpaper_by_killddianette_d5cgysr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6IlwvZlwvMWJhMTA1ZGQtNWNlNi00MDgzLWJhYTktMWRlYWYyMTMwMDE4XC9kNWNneXNyLTkyN2I3MWJkLTA2MzctNDhiOS1hOTZkLTZmZmY2NTczZWQ5NS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ZdYupqJbQOTz5GYPk9DXPiDrAYIYZ1NMWDibyPB8vB4"
                  alt="Perry as a beginner"
                  width={500}
                  height={300}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">The Spark of Curiosity</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Perry&rsquo;s coding journey began in high school when he stumbled upon his first programming language—Python. What started as a simple curiosity quickly turned into a passion, as Perry spent countless hours experimenting with code, building small projects, and learning the fundamentals of software development.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8cce3c6e-efee-462d-b4be-e2e690de24d8/dh1crgh-945086d0-4911-4ac5-8b65-350412d5965d.jpg/v1/fit/w_828,h_1036,q_70,strp/agent_p_by_artbyredjessica_dh1crgh-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhjY2UzYzZlLWVmZWUtNDYyZC1iNGJlLWUyZTY5MGRlMjRkOFwvZGgxY3JnaC05NDUwODZkMC00OTExLTRhYzUtOGI2NS0zNTA0MTJkNTk2NWQuanBnIiwiaGVpZ2h0IjoiPD0xNjAwIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvOGNjZTNjNmUtZWZlZS00NjJkLWI0YmUtZTJlNjkwZGUyNGQ4XC9hcnRieXJlZGplc3NpY2EtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.TsJF1sebxka8d49SNrqtrDp84X0MGVRjpikYTu9VVZk"
                  alt="Perry learning new skills"
                  width={500}
                  height={300}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Diving Deeper</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  After mastering the basics, Perry&rsquo;s thirst for knowledge grew. He began exploring more complex topics such as data structures, algorithms, and web development. Enrolling in online courses and attending coding bootcamps, Perry quickly expanded his skill set, taking on freelance projects to apply his knowledge in real-world scenarios.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/24060ca3-423f-4dd5-ba32-4d9358816310/d2ovyzn-95ca65b2-c479-43a5-b783-7e14a032933c.jpg/v1/fill/w_900,h_580,q_75,strp/perry_the_platypus_by_channelchangers_d2ovyzn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTgwIiwicGF0aCI6IlwvZlwvMjQwNjBjYTMtNDIzZi00ZGQ1LWJhMzItNGQ5MzU4ODE2MzEwXC9kMm92eXpuLTk1Y2E2NWIyLWM0NzktNDNhNS1iNzgzLTdlMTRhMDMyOTMzYy5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.q7OVuhz0NW1uIGPYy7Pg6pfW_Ft9uFkahheJ95eRJTY"
                  alt="Perry working on a big project"
                  width={500}
                  height={300}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Taking on Challenges</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  With several years of experience under his belt, Perry began tackling more significant challenges. From contributing to open-source projects to developing his own applications, Perry continued to push his limits, always looking for opportunities to learn and grow. His journey wasn&rsquo;t without its setbacks, but each obstacle was a stepping stone to becoming the skilled developer he is today.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/481f2756-37f0-45b1-96d1-77f8191b8066/d8x4nz2-7d4ecc84-7756-4ad1-afe8-ec9ed1f6d91d.png/v1/fill/w_1024,h_768,q_80,strp/oh_it_s_only_beginning__by_darikeh_d8x4nz2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvNDgxZjI3NTYtMzdmMC00NWIxLTk2ZDEtNzdmODE5MWI4MDY2XC9kOHg0bnoyLTdkNGVjYzg0LTc3NTYtNGFkMS1hZmU4LWVjOWVkMWY2ZDkxZC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.I4KIwyKoZSK5SQoMdv8XMka_IFyRCCR04OJl0KUhGFw"
                  alt="Perry mentoring others"
                  width={500}
                  height={300}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Giving Back</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Today, Perry is not only a proficient coder but also a mentor to others. He regularly contributes to the programming community by writing tutorials, giving talks, and helping new coders find their footing in the world of software development. For Perry, coding is more than just a profession—it&rsquo;s a lifelong journey of learning and sharing knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}