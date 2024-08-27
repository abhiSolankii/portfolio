"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "As a proficient MERN stack developer, I craft dynamic and responsive web applications that bring ideas to life. I have a strong foundation in MongoDB, Express, React, and Node.js.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Specializing in UI/UX design, I craft user-friendly interfaces with tools like Shadcn UI, Material-UI, and Bootstrap. My focus is on blending aesthetics with functionality to create seamless digital experiences.",
    href: "",
  },
  {
    num: "03",
    title: "API / Backend",
    description:
      "As an API development expert, I build secure and efficient RESTful APIs that ensure seamless communication between front-end and back-end systems. My focus is on delivering scalable and reliable solutions that integrate smoothly across platforms.",
    href: "",
  },
  {
    num: "04",
    title: "Business Website",
    description:
      "As a specialist in Custom Business Website Development, I create tailored solutions for e-commerce, real estate, and other business websites. My focus is on delivering high-performance, user-friendly websites that meet the specific needs of each business.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl font-bold" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
