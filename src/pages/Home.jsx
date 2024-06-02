import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import BlackHole from "../components/BlackHoleComponent/BlackHole";
import edp from "../assets/images/edp.png";
import edpImg from "../assets/images/edpmpt.png";
import pos from "../assets/images/possystem.png";
import twopos from "../assets/images/pos2.png";
import ambit from "../assets/images/ambitbound.png";
import trade from "../assets/images/trade1.png";

function Home() {
  const [imageSrc, setImageSrc] = useState(pos);
  const [edpImageSrc, setEdpImageSrc] = useState(pos);
  const [showHole, setShowHole] = useState(false);
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
      const isVisible = rect.top + 600 < window.innerHeight && rect.bottom >= 0;
      setIsExperienceVisible(isVisible);
    }

    if (projectsSection) {
      const rect = projectsSection.getBoundingClientRect();
      const isVisible = rect.top + 500 < window.innerHeight && rect.bottom >= 0;
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

  return (
    <>
      <div className="relative">
        <div className=" lg:w-4/5 xl:w-11/12 lg:mx-auto md:mx-auto bg grid grid-cols-1 lg:grid-cols-2 relative">
          {/* title page */}
          <div className="mt-10 lg:mt-20 md:mt-16 mx-6 lg:mx-0 xl:ml-40 lg:fixed lg:bottom-0  lg:top-0">
            <header>
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                  Kaung Sann
                </h1>
                <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-200 sm:text-xl">
                  Software Developer
                </h2>
                <h4 className="mt-4 max-w-xs text-md leading-normal text-slate-400 ">
                  I build pixel-perfect, engaging, and accessible digital
                  experiences.
                </h4>
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
                          isExperienceVisible
                            ? "text-animate"
                            : "text-slate-500"
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
              <ul className="flex mt-8 lg:mt-60 items-center">
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
                  <Icon
                    icon="ic:baseline-facebook"
                    className="text-slate-500"
                  />
                </li>
                <li className="mr-4 text-2xl shrink-0">
                  <Icon icon="ri:twitter-x-fill" className="text-slate-500" />
                </li>
              </ul>
            </header>
          </div>
          {/* Scroll Page */}
          <div className=" mt-10 lg:mt-20 md:mt-16 mx-6  bg-lime-40  md:mr-12 lg:mr-28 lg:ml-[400px] xl:ml-[650px] lg:mt-18 lg:w-full">
            <main>
              <section className="border-b-slate-500" ref={aboutRef}>
                <h2 className="lg:hidden my-8 font-bold text-md text-slate-200 py-6 opacity-90 sticky top-0 bg-[#050d24]">
                  About
                </h2>
                <div>
                  <p className="text-slate-400 text-md">
                    Back in my final year as a botany student at Dagon
                    University, I found myself captivated by the world of web
                    development. What started as a hobby soon turned into a
                    full-blown passion. Fast forward to today, I have
                    transitioned from my early days in a call center to becoming
                    a Full Stack Developer at Ambit Software, where I have been
                    honing my skills for nearly two years.
                  </p>
                  <p className="text-slate-400 my-4 text-md">
                    At Ambit Software, I have the privilege of working with a
                    dynamic team to build production-level applications. My tech
                    stack includes React, Node.js, MongoDB, and Express.js, with
                    deployments managed on AWS services such as S3 and EC2.
                    Throughout my tenure, I have successfully developed and
                    launched two major applications that have significantly
                    enhanced our clients operations.
                  </p>
                  <p className="text-slate-400 text-md">
                    When I am not at the computer, Im usually playing
                    basketball, staying active and challenging myself
                    physically, I am always on the lookout for new technologies
                    to master. Currently, I am learning Chinese and exploring
                    the world of DJing, adding new dimensions to my skill set.
                  </p>
                </div>
              </section>
              <section className="mt-28" ref={experienceRef}>
                <h2 className="lg:hidden my-8 font-bold text-md text-slate-200 py-6 opacity-90  sticky top-0 bg-[#050d24]">
                  EXPERIENCE
                </h2>

                <a
                  href="https://www.ambitbound.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="group lg:p-4 md:flex md:justify-between lg:hover:bg-gray-900 hover:rounded-lg mb-12 cursor-pointer hovered-div transition-all duration-300 ease-in-out">
                    <header className="md:w-1/4	z-10 mb-2 mt-1 lg:mr-4 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                      2023 - Present
                    </header>
                    <div className="md:w-4/5">
                      <div className=" group-hover:text-teal-300 relative">
                        <span className="inline-block">
                          FullStack Engineer, Accessibility.
                          <span className="inline-block">Ambit</span>
                          <span className="inline-block">
                            <Icon
                              icon="hugeicons:arrow-up-right-01"
                              className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            />
                          </span>
                        </span>
                      </div>

                      <p className="mt-2 leading-normal text-slate-400 text-sm">
                        Played a key role in building and maintaining two
                        production-level applications with my developer team.
                        Responsible for constructing critical components of the
                        frontend, working closely with cross-functional teams
                        including developers, designers, and product managers.
                        Advocated for and implemented best practices in web
                        accessibility, ensuring an inclusive user experience
                        across the product.
                      </p>
                      <ul className="mt-2 flex flex-wrap">
                        {[
                          "Javascript",
                          "React",
                          "Nextjs",
                          "Tailwind css",
                          "Next UI",
                          "Expressjs",
                          "Mongodb",
                          "ReactNative",
                          "Typescript",
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
                </a>

                <div className="group lg:p-4 md:flex md:justify-between lg:hover:bg-gray-900 hover:rounded-lg mb-12 cursor-pointer hovered-div transition-all duration-300 ease-in-out">
                  <header className="md:w-1/4 z-10 mb-2 mt-1 lg:mr-4 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                    2022 - 2023
                  </header>

                  <div className="md:w-4/5">
                    <div className=" group-hover:text-teal-300 relative">
                      <span className="inline-block">
                        Freelance Developer - Collaboration with
                        <span className="inline-block"> Senior Developer</span>
                        <span className="inline-block">
                          <Icon
                            icon="hugeicons:arrow-up-right-01"
                            className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          />
                        </span>
                      </span>
                    </div>

                    <p className="mt-2 leading-normal text-slate-400 text-sm">
                      Worked on various freelance projects in collaboration with
                      a senior developer, contributing to the development of
                      several applications from the ground up. Gained valuable
                      experience in full-stack development, project management,
                      and client interaction. Ensured the delivery of
                      high-quality, maintainable code, while learning and
                      implementing industry best practices.
                    </p>
                    <ul className="mt-2 flex flex-wrap">
                      {[
                        "Javascript",
                        "React",
                        "Nextjs",
                        "Tailwind CSS",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
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
                  <li
                    onMouseEnter={() => setImageSrc(twopos)}
                    onMouseLeave={() => setImageSrc(pos)}
                    className="lg:px-4 lg:py-6 lg:mt-16 mb-12 cursor-pointer lg:hover:bg-gray-900 hover:rounded-lg hovered-div transition-all duration-300 ease-in-out"
                  >
                    <div className="flex flex-col-reverse md:flex-row lg:flex-row">
                      <img
                        src={imageSrc}
                        alt="img-pj"
                        className="sm:w-48 sm:h-28 lg:w-32 lg:h-16 mt-8 md:mt-0 lg:mt-0 rounded-md shadow-md"
                      />
                      <div className="md:ml-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          POS SYSTEM
                        </h3>
                        <p className="mt-2 leading-normal text-slate-400 text-sm">
                          This POS system has many features of a large
                          application, such as viewing sale and purchase history
                          with charts and applying discounts to individual
                          items. It includes warehouse management where products
                          can be stored in different warehouses, and after
                          purchase, they are allocated accordingly. The system
                          supports unit of measurement (UOM) management, e.g.,
                          selling items packaged in units of 12 pieces. After
                          sales and purchases, you can view comprehensive
                          history with charts and numbers, filter by year,
                          month, and overall performance. The app has roles for
                          admins and users; admins can create sale user accounts
                          restricted to sales only. Additionally, the app
                          includes an accounting module to monitor Gross Sales,
                          Opex, waste, discounts, Fixed Costs, variable costs,
                          and Purchase Costs, with reports filterable by month
                          and year.
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                          {[
                            "React",
                            "Redux",
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
                  <li
                    onMouseEnter={() => setEdpImageSrc(edpImg)}
                    onMouseLeave={() => setEdpImageSrc(edp)}
                    className="lg:px-4 lg:py-6 lg:mt-16 mb-12 cursor-pointer lg:hover:bg-gray-900 hover:rounded-lg hovered-div transition-all duration-300 ease-in-out"
                  >
                    <div className="flex flex-col-reverse md:flex-row lg:flex-row">
                      <img
                        src={edpImageSrc}
                        alt="img-pj"
                        className="sm:w-48 sm:h-28 lg:w-32 lg:h-16 mt-8 md:mt-0 lg:mt-0 rounded-md shadow-md"
                      />
                      <div className="md:ml-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          MPT Task Managment System
                        </h3>
                        <p className="mt-2 leading-normal text-slate-400 text-sm">
                          This project is designed to facilitate communication
                          between site engineers and the company for managing
                          tasks. For example, an admin can assign tasks to a
                          site engineer, such as installing or repairing WiFi
                          machines at a customers home. The engineer will go
                          onsite, complete the installation or repair, connect
                          to the main tower, take a photo, and upload the photo
                          along with other required information using a mobile
                          application. Once the task is completed, the admin
                          reviews the submitted photo and details via a web
                          panel. If everything is correct, a PDF report is
                          generated and sent to the MPT telecom center.
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                          {[
                            "React",
                            "Redux Toolkit",
                            "RTk Query",
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
                        src={ambit}
                        alt="img-pj"
                        className="sm:w-48 sm:h-28 lg:w-32 lg:h-16 mt-8 md:mt-0 lg:mt-0 rounded-md shadow-md"
                      />
                      <div className="md:ml-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          AmbitBound Technologies ( WEBSITE )
                        </h3>
                        <p className="mt-2 leading-normal text-slate-400 text-sm">
                          This website was created using Next.js to showcase our
                          business offerings, including mobile application and
                          web application development, website services,
                          e-commerce solutions, business transformation, and
                          consulting. The website features a contact form for
                          customers to reach out and a job vacancy section where
                          developers and other professionals can apply for
                          positions. Additionally, the website supports two
                          languages, Myanmar and English, providing
                          accessibility for a broader audience.
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                          {["Nextjs", "Next UI"].map((tech) => (
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
                        src={trade}
                        alt="img-pj"
                        className="sm:w-48 sm:h-28 lg:w-32 lg:h-16 mt-8 md:mt-0 lg:mt-0 rounded-md shadow-md"
                      />
                      <div className="md:ml-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          Trading App - Backend(Freelance Project)
                        </h3>
                        <p className="mt-2 leading-normal text-slate-400 text-sm">
                          This trading app includes both admin and user
                          functionalities. After registration, they log in using
                          their credentials.Users further register their bank
                          details (e.g., AYE, KBZ) and NRC card. Admins can
                          verify these details; if incorrect, the users account
                          is rejected. The app supports deposits and
                          withdrawals, where users can add currency (e.g., USDT,
                          EOS, BCH, LTC, XRP, ETC) by paying from their bank to
                          the admins account. Admins verify transactions and
                          update the users balance. Users can also trade coins
                          and view their transaction history. Admins manage
                          currency rates and handle user requests via various
                          APIs.
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                          {["Nodejs", "Expressjs", "Mongodb"].map((tech) => (
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
              <footer className="max-w-md pb-24 lg:ml-4 text-sm sm:mb-12 md:mb-16  lg:mb-20 xl:mb- 12  text-slate-500 sm:pb-0">
                <p>
                  Loosely designed in Figma and coded in Visual Studio Code by
                  yours truly. Built with Next.js and Tailwind CSS, deployed
                  with Vercel. All text is set in the Inter typeface. (2024)
                </p>
              </footer>
            </main>
          </div>
        </div>
        <button
          className="lg:fixed absolute right-0 bottom-6"
          onClick={() => setShowHole(!showHole)}
        >
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

      {showHole && <BlackHole removeHole={setShowHole} />}
    </>
  );
}

export default Home;
