import React from "react";
import SingleTechnology from "./SingleTechnology";

const technologies = [
  { name: "SiJavascript", imgAlt: "JavaScript" },
  { name: "SiReact", imgAlt: "React" },
  { name: "SiCss3", imgAlt: "CSS" },
  { name: "SiTailwindcss", imgAlt: "Tailwind CSS" },
  { name: "SiHtml5", imgAlt: "HTML" },
  { name: "SiSass", imgAlt: "SASS" },
  { name: "SiBootstrap", imgAlt: "Bootstrap" },
  { name: "SiGit", imgAlt: "Git" },
  { name: "SiNextdotjs", imgAlt: "Next JS" },
  { name: "FaNode", imgAlt: "Node.JS" },
  { name: "SiTypescript", imgAlt: "TypeScript" },
];

export default function Technologies(): JSX.Element {
  return (
    <section
      id="technologies"
      className=" text-center max-xs:pt-[1050px] max-sm:pt-[600px]  max-md:pt-[100px] container flex flex-col justify-center h-screen mt-32 items-center max-xs:scroll-m-[-400px] max-sm:scroll-m-[-150px]"
    >
      <h2 className="max-md:text-5xl">Skills & Technologies</h2>
      <p className="text-xl max-sm:text-sm max-md:text-lg max-md:mt-5">The main area of my knowledge is front-end </p>
      <ul className="flex mt-20 gap-16 flex-wrap justify-center">
        {technologies.map((tech, index) => (
          <SingleTechnology key={index} {...tech} />
        ))}
      </ul>
    </section>
  );
}
