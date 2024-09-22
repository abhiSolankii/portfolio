"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaBootstrap,
  FaGit,
  FaCloud,
} from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Passionate MERN stack developer specializing in creating dynamic, user-friendly web applications with a keen eye for design and functionality.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Abhishek Solanki",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 8669431976",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Year",
    },
    {
      fieldName: "Skype",
      fieldValue: "abhishek.01",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "abhisheksolanki01010@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi",
    },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  description:
    "I am an experienced Senior Developer with a strong background in the MERN stack, API development, and UI/UX design. I have a proven track record of leading teams and successfully delivering high-quality, scalable web applications. My expertise spans across crafting dynamic business websites, building seamless digital experiences, and managing projects with modern frameworks and tools like React, Next.js, and Node.js.",
  items: [
    {
      company: "JMedia Corporation",
      linkedIn: "https://www.linkedin.com/company/jmedia-corp/",
      position: "Full Stack Developer Intern",
      duration: "Feb 2024 - Aug 2024",
      info: {
        technologies: [
          "Next.js",
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "IPFS",
          "ShadCN UI",
          "Tailwind CSS",
        ],
        responsibilities: [
          "Developed and maintained responsive web applications using the MERN stack.",
          "Worked closely with cross-functional teams, including designers, product managers, and stakeholders, to deliver high-quality projects on time.",
          "Collaborated with executives and the chairman to align development goals with business objectives.",
          "Deployed web applications on platforms like Netlify, Render, and Vercel, ensuring smooth deployment pipelines.",
        ],
        projects: [
          {
            name: "Crypto Technology Center",
            description:
              "Built a real-time cryptocurrency news website using React.js and ShadCN UI, providing users with up-to-date market trends and news.",
            link: "",
          },
          {
            name: "Noir Dynasty",
            description:
              "Developed a dynamic website using Homestead, focusing on creating an immersive user experience with modern design elements.",
            link: "",
          },
          {
            name: "Noir Soul",
            description:
              "Created an NFT music platform where users can buy and mint music NFTs. Implemented a robust backend with Node.js, IPFS for decentralized storage, and JWT for authentication. The platform included a music player and various pages for artists, songs, and NFTs for sale.",
            link: "",
          },
        ],
        achievements: [
          "Optimized website performance, reducing response times by 25%.",
          "Achieved 100% test coverage for critical app components.",
          "Successfully deployed and maintained multiple projects across various hosting platforms.",
        ],
        links: {
          offerLetter:
            "https://drive.google.com/file/d/1ly8slRK_Nkm-6mQUHa0KFoVkWPIuS9-f/view?usp=sharing",

          completionLetter:
            "https://drive.google.com/file/d/1gZ_UgxvTlK_McKVLRXV_UvsOKV_P5-e-/view?usp=sharing",
        },
      },
    },
    {
      company: "JMedia Corporation",
      linkedIn: "https://www.linkedin.com/company/jmedia-corp/",
      position: "Senior Full Stack Developer",
      duration: "Aug 2024 - present",
      info: {
        technologies: [
          "React",
          "Next.js",
          "MongoDB",
          "Node.js",
          "Express.js",
          "IPFS",
          "WebRTC",
          "Socket.IO",
          "GoDaddy (Domain Management)",
        ],
        responsibilities: [
          "Lead a team of 15+ developers, including web, AI, and data science specialists, ensuring successful project delivery.",
          "Coordinated team activities through regular meetings and clear communication to align development efforts with business goals.",
          "Oversaw the development and deployment of various projects, from front-end UI design to back-end architecture and database management.",
          "Implemented complex real-time systems, such as live video conferencing and chat functionalities, using WebRTC and Socket.IO.",
          "Managed domain setup and hosting deployment on platforms like Netlify and Render, integrating domains with GoDaddy.",
        ],
        projects: [
          {
            name: "Aqua Genetics AI Labs",
            description:
              "Managed the development of a comprehensive web platform for an AI-driven genetics lab, featuring sections for community engagement, ticketing systems, and virtual tours. Also implemented admin controls for user account management and live video conferencing capabilities.",
            link: "",
          },
          {
            name: "JMedia Corporate Website",
            description:
              "Led a team to develop and maintain the official website for JMedia Corporation, providing timely and unbiased news across various categories, including sports, politics, and business.",
            link: "",
          },
        ],
        achievements: [
          "Successfully led the team to improve website performance and scalability by over 30%.",
          "Integrated and deployed multiple websites, managing domain transfers to GoDaddy for seamless live deployment.",
        ],
        links: {
          offerLetter:
            "https://drive.google.com/file/d/1ly8slRK_Nkm-6mQUHa0KFoVkWPIuS9-f/view?usp=sharing",

          completionLetter: "",
        },
      },
    },
    {
      company: "Clinix Sphere",
      linkedIn: "https://www.linkedin.com/company/jmedia-corp/",
      position: "Full Stack Developer Intern",
      duration: "Sept 2024 - present",
      info: {
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Docker"],
        responsibilities: [
          "Contributing to the development of MERN stack projects for healthcare applications.",
          "Collaborating with team members to define project scope and deliver high-quality code.",
          "Participating in code reviews and ensuring best practices are followed across the development team.",
        ],
        projects: [
          {
            name: "Coming soon",
            description: "",
            link: "",
          },
        ],
        achievements: ["Details coming soon"],
        links: {
          offerLetter: "",

          completionLetter: "",
        },
      },
    },
  ],
};

const education = {
  icon: "",
  title: "My education",
  description:
    "I completed a Full Stack Development course in 2023, gaining key web development skills. Currently pursuing a B.Tech in Computer Science at RMD Sinhgad School of Engineering, Pune, with an expected graduation in 2026",
  items: [
    {
      institution: "Digi grow hub",
      degree: "Full stack development course",
      duration: "2023",
    },
    {
      institution: "RMD Sinhgad school of engineering, Pune",
      degree: "B.tech Coputer Science",
      duration: "2022 - 2026",
    },
    {
      institution: "Kendriya vidyalaya NDA Pune",
      degree: "12th (PCM)",
      duration: "2021 - 2022",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "I am proficient in HTML5, CSS, and JavaScript, with strong expertise in React.js and Next.js for building dynamic web applications. Skilled in using Tailwind CSS and Bootstrap for responsive design, and experienced with Node.js for server-side development. Additionally, I utilize Figma for UI/UX design and Git for version control.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React Js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next Js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind css",
    },
    {
      icon: <FaNodeJs />,
      name: "Node Js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDb",
    },
    {
      icon: <FaCloud />,
      name: "Cloud",
    },
  ],
};
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col lg:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content  */}
          <div className="min-h-[70vh] w-full">
            {/* experience  */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="mt-2 bg-accent text-slate-700 py-1 px-3 rounded transition hover:bg-accent-dark">
                                Info
                              </button>
                            </DialogTrigger>
                            <DialogContent className="bg-[#1a1b1f] text-white shadow-xl rounded-lg max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle className="text-2xl font-semibold text-white">
                                  {item.position} at {item.company}
                                </DialogTitle>
                                <DialogDescription className="text-white/60">
                                  <div className="mt-4">
                                    <h4 className="text-xl text-accent mb-2">
                                      Technologies
                                    </h4>
                                    <p className="text-white/80">
                                      {item.info?.technologies?.length
                                        ? item.info.technologies.join(", ")
                                        : "N/A"}
                                    </p>
                                  </div>

                                  <div className="mt-6">
                                    <h4 className="text-xl text-accent mb-2">
                                      Responsibilities
                                    </h4>
                                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                                      {item.info?.responsibilities?.map(
                                        (resp, idx) => <li key={idx}>{resp}</li>
                                      ) || "N/A"}
                                    </ul>
                                  </div>

                                  <div className="mt-6">
                                    <h4 className="text-xl text-accent mb-2">
                                      Projects
                                    </h4>
                                    {item.info?.projects?.map(
                                      (project, idx) => (
                                        <div key={idx} className="mb-2">
                                          <a
                                            href={project.link}
                                            className="text-blue-400 underline"
                                          >
                                            {project.name}
                                          </a>
                                          <p className="text-white/70">
                                            {project.description}
                                          </p>
                                        </div>
                                      )
                                    ) || "N/A"}
                                  </div>

                                  <div className="mt-6">
                                    <h4 className="text-xl text-accent mb-2">
                                      Achievements
                                    </h4>
                                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                                      {item.info?.achievements?.map(
                                        (ach, idx) => <li key={idx}>{ach}</li>
                                      ) || "N/A"}
                                    </ul>
                                  </div>
                                </DialogDescription>
                              </DialogHeader>

                              <div className="flex justify-end mt-4 space-x-3">
                                <a
                                  href={item.info?.links.offerLetter || "#"}
                                  target="_blank"
                                  className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600"
                                >
                                  Offer Letter
                                </a>
                                <a
                                  href={
                                    item.info?.links.completionLetter || "#"
                                  }
                                  target="_blank"
                                  className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-600"
                                >
                                  Completion Letter
                                </a>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education  */}
            <TabsContent value="education" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills  */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[10px] lg:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full bg-[#232329] h-[150px] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about  */}
            <TabsContent
              value="about"
              className="w-full text-center lg:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px ] text-white/60 mx-auto lg:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center lg:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

// "use client";

// import {
//   FaHtml5,
//   FaCss3,
//   FaJs,
//   FaReact,
//   FaFigma,
//   FaNodeJs,
//   FaBootstrap,
//   FaGit,
//   FaCloud,
// } from "react-icons/fa";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

// const about = {
//   title: "About me",
//   description:
//     "Passionate MERN stack developer specializing in creating dynamic, user-friendly web applications with a keen eye for design and functionality.",
//   info: [
//     {
//       fieldName: "Name",
//       fieldValue: "Abhishek Solanki",
//     },
//     {
//       fieldName: "Phone",
//       fieldValue: "(+91) 8669431976",
//     },
//     {
//       fieldName: "Experience",
//       fieldValue: "1+ Year",
//     },
//     {
//       fieldName: "Skype",
//       fieldValue: "abhishek.01",
//     },
//     {
//       fieldName: "Nationality",
//       fieldValue: "Indian",
//     },
//     {
//       fieldName: "Email",
//       fieldValue: "abhisheksolanki01010@gmail.com",
//     },
//     {
//       fieldName: "Freelance",
//       fieldValue: "Available",
//     },
//     {
//       fieldName: "Language",
//       fieldValue: "English, Hindi",
//     },
//   ],
// };

// const experience = {
//   icon: "",
//   title: "My experience",
//   description:
//     "Experienced Senior Developer with expertise in MERN stack, API development, and UI/UX design. Skilled in crafting dynamic business websites and seamless digital experiences using modern frameworks and tools. Proven leader in managing complex projects and guiding teams to success.",
//   items: [
//     {
//       company: "Jmedia corporation",
//       position: "Full stack developer Intern",
//       duration: "Feb 2024 - Aug 2024",
//       info: [
//         {
//           technologies: ["React", "Node.js", "Express.js", "MongoDB"],
//           responsibilities: [
//             "Developed and maintained web applications using the MERN stack.",
//             "Collaborated with cross-functional teams to define project requirements and deliverables.",
//           ],
//           projects: [
//             {
//               name: "Real-Time Chat App",
//               description:
//                 "Built a real-time chat app with user authentication and Socket.io for messaging.",
//               link: "https://github.com/abhiSolankii/chat-app",
//             },
//           ],
//           achievements: [
//             "Optimized API performance, reducing response times by 25%.",
//             "Achieved 100% test coverage for critical app components.",
//           ],
//         },
//       ],
//     },
//     {
//       company: "Jmedia corporation",
//       position: "Sr. Full stack developer",
//       duration: "Aug 2024 - present",
//       info: [
//         {
//           technologies: ["React", "Node.js", "Express.js", "MongoDB"],
//           responsibilities: [
//             "Developed and maintained web applications using the MERN stack.",
//             "Collaborated with cross-functional teams to define project requirements and deliverables.",
//           ],
//           projects: [
//             {
//               name: "Real-Time Chat App",
//               description:
//                 "Built a real-time chat app with user authentication and Socket.io for messaging.",
//               link: "https://github.com/abhiSolankii/chat-app",
//             },
//           ],
//           achievements: [
//             "Optimized API performance, reducing response times by 25%.",
//             "Achieved 100% test coverage for critical app components.",
//           ],
//         },
//       ],
//     },
//     {
//       company: "Clinix sphere",
//       position: "Full stack developer Intern",
//       duration: "Sept 2024 - present",
//       info: [
//         {
//           technologies: ["React", "Node.js", "Express.js", "MongoDB"],
//           responsibilities: [
//             "Developed and maintained web applications using the MERN stack.",
//             "Collaborated with cross-functional teams to define project requirements and deliverables.",
//           ],
//           projects: [
//             {
//               name: "Real-Time Chat App",
//               description:
//                 "Built a real-time chat app with user authentication and Socket.io for messaging.",
//               link: "https://github.com/abhiSolankii/chat-app",
//             },
//           ],
//           achievements: [
//             "Optimized API performance, reducing response times by 25%.",
//             "Achieved 100% test coverage for critical app components.",
//           ],
//         },
//       ],
//     },
//   ],
// };

// const education = {
//   icon: "",
//   title: "My education",
//   description:
//     "I completed a Full Stack Development course in 2023, gaining key web development skills. Currently pursuing a B.Tech in Computer Science at RMD Sinhgad School of Engineering, Pune, with an expected graduation in 2026",
//   items: [
//     {
//       institution: "Digi grow hub",
//       degree: "Full stack development course",
//       duration: "2023",
//     },
//     {
//       institution: "RMD Sinhgad school of engineering, Pune",
//       degree: "B.tech Coputer Science",
//       duration: "2022 - 2026",
//     },
//     {
//       institution: "Kendriya vidyalaya NDA Pune",
//       degree: "12th (PCM)",
//       duration: "2021 - 2022",
//     },
//   ],
// };

// const skills = {
//   title: "My skills",
//   description:
//     "I am proficient in HTML5, CSS, and JavaScript, with strong expertise in React.js and Next.js for building dynamic web applications. Skilled in using Tailwind CSS and Bootstrap for responsive design, and experienced with Node.js for server-side development. Additionally, I utilize Figma for UI/UX design and Git for version control.",
//   skillList: [
//     {
//       icon: <FaHtml5 />,
//       name: "Html 5",
//     },
//     {
//       icon: <FaCss3 />,
//       name: "CSS",
//     },
//     {
//       icon: <FaJs />,
//       name: "Javascript",
//     },
//     {
//       icon: <FaReact />,
//       name: "React Js",
//     },
//     {
//       icon: <SiNextdotjs />,
//       name: "Next Js",
//     },
//     {
//       icon: <SiTailwindcss />,
//       name: "Tailwind css",
//     },
//     {
//       icon: <FaNodeJs />,
//       name: "Node Js",
//     },
//     {
//       icon: <FaFigma />,
//       name: "Figma",
//     },
//     {
//       icon: <FaBootstrap />,
//       name: "Bootstrap",
//     },
//     {
//       icon: <FaGit />,
//       name: "Git",
//     },
//     {
//       icon: <SiMongodb />,
//       name: "MongoDb",
//     },
//     {
//       icon: <FaCloud />,
//       name: "Cloud",
//     },
//   ],
// };
// import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
//   TooltipProvider,
// } from "@/components/ui/tooltip";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { motion } from "framer-motion";

// const Resume = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
//       }}
//       className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
//     >
//       <div className="container mx-auto">
//         <Tabs
//           defaultValue="experience"
//           className="flex flex-col lg:flex-row gap-[60px]"
//         >
//           <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
//             <TabsTrigger value="experience">Experience</TabsTrigger>
//             <TabsTrigger value="education">Education</TabsTrigger>
//             <TabsTrigger value="skills">Skills</TabsTrigger>
//             <TabsTrigger value="about">About me</TabsTrigger>
//           </TabsList>
//           {/* content  */}
//           <div className="min-h-[70vh] w-full">
//             {/* experience  */}
//             <TabsContent value="experience" className="w-full ">
//               <div className="flex flex-col gap-[30px] text-center lg:text-left">
//                 <h3 className="text-4xl font-bold">{experience.title}</h3>
//                 <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
//                   {experience.description}
//                 </p>
//                 <ScrollArea className="h-[400px]">
//                   <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
//                     {experience.items.map((item, index) => {
//                       return (
//                         <li
//                           key={index}
//                           className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
//                         >
//                           <span className="text-accent">{item.duration}</span>
//                           <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
//                             {item.position}
//                           </h3>
//                           <div className="flex items-center gap-3">
//                             <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
//                             <p className="text-white/60">{item.company}</p>
//                           </div>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </ScrollArea>
//               </div>
//             </TabsContent>
//             {/* education  */}
//             <TabsContent value="education" className="w-full ">
//               <div className="flex flex-col gap-[30px] text-center lg:text-left">
//                 <h3 className="text-4xl font-bold">{education.title}</h3>
//                 <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
//                   {education.description}
//                 </p>
//                 <ScrollArea className="h-[400px]">
//                   <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
//                     {education.items.map((item, index) => {
//                       return (
//                         <li
//                           key={index}
//                           className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
//                         >
//                           <span className="text-accent">{item.duration}</span>
//                           <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
//                             {item.degree}
//                           </h3>
//                           <div className="flex items-center gap-3">
//                             <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
//                             <p className="text-white/60">{item.institution}</p>
//                           </div>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </ScrollArea>
//               </div>
//             </TabsContent>
//             {/* skills  */}
//             <TabsContent value="skills" className="w-full h-full">
//               <div className="flex flex-col gap-[30px]">
//                 <div className="flex flex-col gap-[30px] text-center lg:text-left">
//                   <h3 className="text-4xl font-bold">{skills.title}</h3>
//                   <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
//                     {skills.description}
//                   </p>
//                 </div>
//                 <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[10px] lg:gap-[30px]">
//                   {skills.skillList.map((skill, index) => {
//                     return (
//                       <li key={index}>
//                         <TooltipProvider delayDuration={100}>
//                           <Tooltip>
//                             <TooltipTrigger className="w-full bg-[#232329] h-[150px] rounded-xl flex justify-center items-center group">
//                               <div className="text-6xl group-hover:text-accent transition-all duration-300">
//                                 {skill.icon}
//                               </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                               <p>{skill.name}</p>
//                             </TooltipContent>
//                           </Tooltip>
//                         </TooltipProvider>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </div>
//             </TabsContent>
//             {/* about  */}
//             <TabsContent
//               value="about"
//               className="w-full text-center lg:text-left"
//             >
//               <div className="flex flex-col gap-[30px]">
//                 <h3 className="text-4xl font-bold">{about.title}</h3>
//                 <p className="max-w-[600px ] text-white/60 mx-auto lg:mx-0">
//                   {about.description}
//                 </p>
//                 <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0">
//                   {about.info.map((item, index) => {
//                     return (
//                       <li
//                         key={index}
//                         className="flex items-center justify-center lg:justify-start gap-4"
//                       >
//                         <span className="text-white/60">{item.fieldName}</span>
//                         <span className="text-xl">{item.fieldValue}</span>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </div>
//             </TabsContent>
//           </div>
//         </Tabs>
//       </div>
//     </motion.div>
//   );
// };

// export default Resume;
