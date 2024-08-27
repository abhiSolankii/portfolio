"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

import { FaEnvelope, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+91) 8669431976" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "abhisheksolanki01010@gmail.com",
  },
  { icon: <FaMapMarkedAlt />, title: "Address", description: "Pune, India" },
];

const Contact = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto h-full min-h-screen">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          {/* form  */}
          <div className="lg:w-[54%] order-2 lg:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              action="https://formspree.io/f/xyzgojgj"
              method="POST"
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, nemo.
              </p>
              {/* input  */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="Firstname"
                  required
                  name="firstname"
                />
                <Input
                  type="lastname"
                  placeholder="Lastname"
                  required
                  name="lastname"
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  email="true"
                  required
                  name="email"
                />
                <Input
                  type="phone"
                  placeholder="Phone number"
                  number="true"
                  required
                  name="phone"
                />
              </div>
              {/* select  */}
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web development</SelectItem>
                    <SelectItem value="ui">UI/UX Design</SelectItem>
                    <SelectItem value="api">API / Backend</SelectItem>
                    <SelectItem value="business">Business Website</SelectItem>
                    <SelectItem value="other">
                      Other- Specify in message
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea  */}
              <Textarea
                className="h-[200px] "
                placeholder="Type your message here."
                required
                name="message"
              />

              {/* btn  */}
              <Button size="md" className="max-w-40 rounded-2xl" type="submit">
                Send message
              </Button>
            </form>
          </div>
          {/* info  */}
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
