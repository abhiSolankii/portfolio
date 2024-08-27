"use client";
import CountUp from "react-countup";
const stats = [
  { num: 1, text: "Year of experience" },
  { num: 20, text: "Projects completed" },
  { num: 12, text: "Technologies mastered" },
  { num: 500, text: "Code commits" },
];
const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 items-center text-center mt-6 lg:mt-0 lg:flex-row  w-full lg:justify-between">
          {stats.map((item, index) => {
            return (
              <div key={index}>
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl lg:text-6xl font-extrabold"
                />
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
