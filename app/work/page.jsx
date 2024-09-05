"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowDownRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "Chat App",
    description:
      "A real-time chat application built with React.js, Tailwind CSS, and Socket.io, featuring dynamic messaging and seamless user interaction.",
    stack: [
      { name: "React js" },
      { name: "Tailwind" },
      { name: "Socket io" },
      { name: "express js" },
    ],
    image: "/assets/projects/chat-app.png",
    live: "https://chat-app-q12r.onrender.com",
    github: "https://github.com/abhiSolankii/chat-app",
  },
  {
    num: "02",
    category: "Frontend",
    title: "News Website",
    description:
      "A responsive news website built with React.js and Tailwind CSS, featuring dynamic content fetched from an API for up-to-date news coverage.",
    stack: [{ name: "React js" }, { name: "tailwind" }, { name: "API" }],
    image: "/assets/projects/news-website.png",
    live: "https://ocean-news-react.netlify.app",
    github: "https://github.com/abhiSolankii/News-website-react",
  },

  {
    num: "03",
    category: "Fullstack",
    title: "Music website",
    description:
      "A full-stack music website developed with Next.js and Node.js, featuring a sleek design with Tailwind CSS and integrated APIs for dynamic music content and playback.",
    stack: [
      { name: "Next js" },
      { name: "Tailwind" },
      { name: "APIs" },
      { name: "Node js" },
    ],
    image: "/assets/projects/music-website.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Fullstack",
    title: "Real estate website",
    description:
      "A full-stack real estate website built with React.js and Node.js, featuring property listings on an interactive map, options to buy or sell properties, and integrated chat functionality for client communication.",
    stack: [
      { name: "React js" },
      { name: "tailwind" },
      { name: "Cloud" },
      { name: "Node js" },
    ],
    image: "/assets/projects/real-estate-website.png",
    live: "https://www.shutterstock.com/image-vector/coming-soon-on-dark-background-600nw-2364512887.jpg",
    github: "https://github.com/abhiSolankii/homeheaven-realestate",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:mx-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px] ">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num  */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <h2 className="text-[32px] font-semibold leading-none text-white/80 group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-accent text-xl capitalize">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20 "></div>
              {/* buttons  */}
              <div className="flex items-center gap-4">
                {/* live project button  */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group transition-all duration-500 hover:-rotate-45">
                        <BsArrowDownRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button  */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Swiper
              className="lg:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              spaceBetween={30}
              slidesPerView={1}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay  */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image  */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons  */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary w-[44px] h-[44px] text-[22px] flex justify-center items-center transition-all cursor-pointer"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
