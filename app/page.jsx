import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          {/* text  */}
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span className="text-2xl">Web developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />
              <span className="text-accent">Abhishek Solanki</span>
            </h1>
            <p className="max-w-[500px] mb-4 text-white/80">
              I excel in building dynamic web applications using the MERN stack,
              focusing on creating seamless and responsive user experiences.
            </p>
            {/* socials  */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="">
                <a
                  href="https://drive.google.com/u/0/uc?id=1t8dnE7pZH2Ft0JbMIcqppCXpjgxuSY-N&export=download"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div>
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent  rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo  */}
          <div className="order-1 lg:order-none mb-4 lg:mb-0 mt-6">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
