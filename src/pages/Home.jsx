import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

function Home() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const handleScroll = () => {
    const aboutSection = aboutRef.current;
    const experienceSection = experienceRef.current;
    const projectsSection = projectsRef.current;

    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      setIsAboutVisible(isVisible);
    }

    if (experienceSection) {
      const rect = experienceSection.getBoundingClientRect();
      const isVisible = rect.top + 800 < window.innerHeight && rect.bottom >= 0;
      setIsExperienceVisible(isVisible);
    }

    if (projectsSection) {
      const rect = projectsSection.getBoundingClientRect();
      const isVisible = rect.top + 800 < window.innerHeight && rect.bottom >= 0;
      setIsProjectsVisible(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("isAboutVisible changed:", isAboutVisible);
  }, [isAboutVisible]);

  useEffect(() => {
    console.log("isExperienceVisible changed:", isExperienceVisible);
  }, [isExperienceVisible]);

  useEffect(() => {
    console.log("isProjectsVisible changed:", isProjectsVisible);
  }, [isProjectsVisible]);
  return (
    <div className="relative">
      <div className="lg:w-4/5 grid grid-cols-1 lg:grid-cols-2 mx-auto relative">
        {/* title page */}
        <div className="mt-10 lg:mt-20 md:mt-16 mx-6 lg:mx-0 xl:ml-12 lg:fixed">
          <header>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                Kaung Sann
              </h1>
              <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-200 sm:text-xl">
                Software Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate-400">
                I build pixel-perfect, engaging, and accessible digital
                experiences.
              </p>
              <nav aria-label="">
                <ul className="mt-16 hidden lg:block">
                  <li className="mb-6 flex items-center">
                    <span
                      className={`line   ${
                        isAboutVisible
                          ? "line-animate bg-white"
                          : "bg-slate-500 w-8 h-0.5"
                      }`}
                    ></span>
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200 ml-4 ${
                        isAboutVisible ? "text-animate" : "text-slate-500"
                      }`}
                    >
                      About
                    </span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span
                      className={`line   ${
                        isExperienceVisible
                          ? "line-animate bg-white"
                          : "bg-slate-500 w-8 h-0.5"
                      }`}
                    ></span>
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200 ml-4 ${
                        isExperienceVisible ? "text-animate" : "text-slate-500"
                      }`}
                    >
                      EXPERIENCE
                    </span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span
                      className={`line   ${
                        isProjectsVisible
                          ? "line-animate bg-white"
                          : "bg-slate-500 w-8 h-0.5"
                      }`}
                    ></span>
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200 ml-4 ${
                        isProjectsVisible ? "text-animate" : "text-slate-500"
                      }`}
                    >
                      PROJECTS
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
            <ul className="flex mt-8 lg:mt-40  items-center">
              <li className="mr-5 text-3xl shrink-0">
                <Icon icon="mdi:github" className="text-slate-500" />
              </li>
              <li className="mr-5 text-3xl shrink-0">
                <Icon
                  icon="ant-design:linkedin-filled"
                  className="text-slate-500"
                />
              </li>

              <li className="mr-5 text-2xl shrink-0">
                <Icon icon="bi:instagram" className="text-slate-500" />
              </li>

              <li className="mr-5 text-3xl shrink-0">
                <Icon icon="ic:baseline-facebook" className="text-slate-500" />
              </li>
              <li className="mr-4 text-2xl shrink-0">
                <Icon icon="ri:twitter-x-fill" className="text-slate-500" />
              </li>
            </ul>
          </header>
        </div>
        {/* Scroll Page */}
        <div className="mt-10 lg:mt-20 md:mt-16 mx-6 lg:ml-[500px] lg:mt-18 lg:w-full">
          <main>
            <section className="border-b-2 border-b-slate-500" ref={aboutRef}>
              <h2 className="lg:hidden my-8 font-bold text-md text-slate-200 py-6 opacity-90 sticky top-0 bg-[#050d24]">
                About
              </h2>
              <div>
                <p className="text-slate-400 text-sm">
                  Back in 2012, I decided to try my hand at creating custom
                  Tumblr themes and tumbled head first into the rabbit hole of
                  coding and web development. Fast-forward to today, and I’ve
                  had the privilege of building software for an advertising
                  agency, a start-up, a huge corporation, and a digital product
                  studio.
                </p>
                <p className="text-slate-400 my-4 text-sm">
                  My main focus these days is building accessible user
                  interfaces for our customers at Klaviyo. I most enjoy building
                  software in the sweet spot where design and engineering meet —
                  things that look good but are also built well under the hood.
                  In my free time, I have also released an online video course
                  that covers everything you need to know to build a web app
                  with the Spotify API.
                </p>
                <p className="text-slate-400 text-sm">
                  When I am not at the computer, Im usually rock climbing,
                  reading, hanging out with my wife and two cats, or running
                  around Hyrule searching for Korok seeds K o r o k s e e d s .
                </p>
              </div>
            </section>
            <section className="mt-28" ref={experienceRef}>
              <h2 className="lg:hidden my-8 font-bold text-md text-slate-200 py-6 opacity-90  sticky top-0 bg-[#050d24]">
                EXPERIENCE
              </h2>
              <div className="lg:p-4 md:flex md:justify-between lg:hover:bg-gray-900 hover:rounded-lg mb-12 cursor-pointer hovered-div transition-all duration-300 ease-in-out">
                <header className="md:w-1/4	z-10 mb-2 mt-1 lg:mr-4 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  2024 - Present
                </header>
                <div className="md:w-4/5">
                  <h3 className="font-medium leading-snug text-slate-200 hover:text-teal-300">
                    React Engineer , Accessibility . Kiavyia{" "}
                  </h3>
                  <p className="mt-2 leading-normal text-slate-400 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, voluptatem quo dignissimos quisquam cumque pariatur
                    eum quod accusamus suscipit itaque officiis enim doloremque
                    id at dolorum rerum impedit minima odit adipisci magni vel
                    natus quasi vitae facere? Exercitationem minus pariatur,
                    quaerat temporibus, cum sequi necessitatibus quos dolorum
                    nemo eius ut.
                  </p>
                  <ul className="mt-2 flex flex-wrap">
                    {[
                      "Javascript",
                      "React",
                      "Nextjs",
                      "Tailwind css",
                      "Next UI",
                    ].map((skill) => (
                      <li className="mr-1.5 mt-2" key={skill}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:p-4 md:flex md:justify-between lg:hover:bg-gray-900 hover:rounded-lg mb-12 cursor-pointer hovered-div transition-all duration-300 ease-in-out">
                <header className="md:w-1/4	z-10 mb-2 mt-1 lg:mr-4 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  2024 - Present
                </header>
                <div className="md:w-4/5">
                  <h3 className="font-medium leading-snug text-slate-200 hover:text-teal-300">
                    React Engineer , Accessibility . Kiavyia{" "}
                  </h3>
                  <p className="mt-2 leading-normal text-slate-400 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, voluptatem quo dignissimos quisquam cumque pariatur
                    eum quod accusamus suscipit itaque officiis enim doloremque
                    id at dolorum rerum impedit minima odit adipisci magni vel
                    natus quasi vitae facere? Exercitationem minus pariatur,
                    quaerat temporibus, cum sequi necessitatibus quos dolorum
                    nemo eius ut.
                  </p>
                  <ul className="mt-2 flex flex-wrap">
                    {[
                      "Javascript",
                      "React",
                      "Nextjs",
                      "Tailwind css",
                      "Next UI",
                    ].map((skill) => (
                      <li className="mr-1.5 mt-2" key={skill}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:p-4 md:flex md:justify-between lg:hover:bg-gray-900 hover:rounded-lg mb-12 cursor-pointer hovered-div transition-all duration-300 ease-in-out">
                <header className="md:w-1/4	z-10 mb-2 mt-1 lg:mr-4 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  2024 - Present
                </header>
                <div className="md:w-4/5">
                  <h3 className="font-medium leading-snug text-slate-200 hover:text-teal-300">
                    React Engineer , Accessibility . Kiavyia{" "}
                  </h3>
                  <p className="mt-2 leading-normal text-slate-400 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, voluptatem quo dignissimos quisquam cumque pariatur
                    eum quod accusamus suscipit itaque officiis enim doloremque
                    id at dolorum rerum impedit minima odit adipisci magni vel
                    natus quasi vitae facere? Exercitationem minus pariatur,
                    quaerat temporibus, cum sequi necessitatibus quos dolorum
                    nemo eius ut.
                  </p>
                  <ul className="mt-2 flex flex-wrap">
                    {[
                      "Javascript",
                      "React",
                      "Nextjs",
                      "Tailwind css",
                      "Next UI",
                    ].map((skill) => (
                      <li className="mr-1.5 mt-2" key={skill}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:p-4 md:flex md:justify-between lg:hover:bg-gray-900 hover:rounded-lg mb-12 cursor-pointer hovered-div transition-all duration-300 ease-in-out">
                <header className="md:w-1/4	z-10 mb-2 lg:mr-4 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  2024 - Present
                </header>
                <div className="md:w-4/5">
                  <h3 className="font-medium leading-snug text-slate-200 hover:text-teal-300">
                    React Engineer , Accessibility . Kiavyia{" "}
                  </h3>
                  <p className="mt-2 leading-normal text-slate-400 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, voluptatem quo dignissimos quisquam cumque pariatur
                    eum quod accusamus suscipit itaque officiis enim doloremque
                    id at dolorum rerum impedit minima odit adipisci magni vel
                    natus quasi vitae facere? Exercitationem minus pariatur,
                    quaerat temporibus, cum sequi necessitatibus quos dolorum
                    nemo eius ut.
                  </p>
                  <ul className="mt-2 flex flex-wrap">
                    {[
                      "Javascript",
                      "React",
                      "Nextjs",
                      "Tailwind css",
                      "Next UI",
                    ].map((skill) => (
                      <li className="mr-1.5 mt-2" key={skill}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
            <section className="mt-28" ref={projectsRef}>
              <h2 className="lg:hidden my-8 font-bold text-md text-slate-200 py-6 opacity-90  sticky top-0 bg-[#050d24]">
                PROJECTS
              </h2>
              <ul>
                <li className="lg:px-4 lg:py-6 lg:mt-16 mb-12 cursor-pointer lg:hover:bg-gray-900 hover:rounded-lg hovered-div transition-all duration-300 ease-in-out">
                  <div className="flex flex-col-reverse md:flex-row lg:flex-row">
                    <img
                      src="https://media.istockphoto.com/id/1257531806/vector/anime-touch-background-illustration-of-cityscape-made-in-vector.jpg?s=170667a&w=0&k=20&c=oAxoErbybiPYSnsGdUyxWQRJt4ifQ_-wLwCe-FugDNQ="
                      alt="img-pj"
                      className="sm:w-48 sm:h-28 lg:w-32 lg:h-16 mt-8 md:mt-0 lg:mt-0 rounded-md shadow-md"
                    />
                    <div className="md:ml-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        MM NEWS (BLOG WEBSITE)
                      </h3>
                      <p className="mt-2 leading-normal text-slate-400 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium eos corrupti illo sit eum error temporibus
                        nemo reprehenderit aliquam. Aut molestias facere harum
                      </p>
                      <ul className="mt-2 flex flex-wrap">
                        {[
                          "React",
                          "Tailwind css",
                          "Nodejs",
                          "Expressjs",
                          "Mongodb",
                          "Next UI",
                        ].map((tech) => (
                          <li className="mr-1.5 mt-2" key={tech}>
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              {tech}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="lg:px-4 lg:py-6 lg:mt-16 mb-12 cursor-pointer lg:hover:bg-gray-900 hover:rounded-lg hovered-div transition-all duration-300 ease-in-out">
                  <div className="flex flex-col-reverse md:flex-row lg:flex-row">
                    <img
                      src="https://media.istockphoto.com/id/1257531806/vector/anime-touch-background-illustration-of-cityscape-made-in-vector.jpg?s=170667a&w=0&k=20&c=oAxoErbybiPYSnsGdUyxWQRJt4ifQ_-wLwCe-FugDNQ="
                      alt="img-pj"
                      className="sm:w-48 sm:h-28 lg:w-32 lg:h-16 mt-8 md:mt-0 lg:mt-0 rounded-md shadow-md"
                    />
                    <div className="md:ml-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        MM NEWS (BLOG WEBSITE)
                      </h3>
                      <p className="mt-2 leading-normal text-slate-400 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium eos corrupti illo sit eum error temporibus
                        nemo reprehenderit aliquam. Aut molestias facere harum
                      </p>
                      <ul className="mt-2 flex flex-wrap">
                        {[
                          "React",
                          "Tailwind css",
                          "Nodejs",
                          "Expressjs",
                          "Mongodb",
                          "Next UI",
                        ].map((tech) => (
                          <li className="mr-1.5 mt-2" key={tech}>
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              {tech}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="lg:px-4 lg:py-6 lg:mt-16 mb-12 cursor-pointer lg:hover:bg-gray-900 hover:rounded-lg hovered-div transition-all duration-300 ease-in-out">
                  <div className="flex flex-col-reverse md:flex-row lg:flex-row">
                    <img
                      src="https://media.istockphoto.com/id/1257531806/vector/anime-touch-background-illustration-of-cityscape-made-in-vector.jpg?s=170667a&w=0&k=20&c=oAxoErbybiPYSnsGdUyxWQRJt4ifQ_-wLwCe-FugDNQ="
                      alt="img-pj"
                      className="sm:w-48 sm:h-28 lg:w-32 lg:h-16 mt-8 md:mt-0 lg:mt-0 rounded-md shadow-md"
                    />
                    <div className="md:ml-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        MM NEWS (BLOG WEBSITE)
                      </h3>
                      <p className="mt-2 leading-normal text-slate-400 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium eos corrupti illo sit eum error temporibus
                        nemo reprehenderit aliquam. Aut molestias facere harum
                      </p>
                      <ul className="mt-2 flex flex-wrap">
                        {[
                          "React",
                          "Tailwind css",
                          "Nodejs",
                          "Expressjs",
                          "Mongodb",
                          "Next UI",
                        ].map((tech) => (
                          <li className="mr-1.5 mt-2" key={tech}>
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              {tech}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
            <footer className="max-w-md pb-24 lg:ml-4 text-sm  lg:mb-20 xl:mb- 12  text-slate-500 sm:pb-0">
              <p>
                Loosely designed in Figma and coded in Visual Studio Code by
                yours truly. Built with Next.js and Tailwind CSS, deployed with
                Vercel. All text is set in the Inter typeface. (2024)
              </p>
            </footer>
          </main>
        </div>
      </div>

      <button className="absolute right-1 md:right-3 bottom-4 md:bottom-6 lg:bottom-8">
        <img
          width="100"
          height="86"
          decoding="async"
          data-nimg="1"
          loading="lazy"
          alt="Spinning Tardis from Doctor Who"
          src="https://brittanychiang.com/_next/image?url=%2Fimages%2Ftardis%2Frotate.gif&w=256&q=75"
        />
      </button>
    </div>
  );
}

export default Home;
