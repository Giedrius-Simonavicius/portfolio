import React from "react";
import SingleTechnology from "./SingleTechnology";

const technologies = [
  { name: "SiJavascript", imgAlt: "JavaScript" },
  { name: "SiReact", imgAlt: "React" },
  { name: "SiCss3", imgAlt: "CSS" },
  { name: "SiHtml5", imgAlt: "HTML" },
  { name: "SiTailwindcss", imgAlt: "Tailwind CSS" },
  { name: "SiSass", imgAlt: "SASS" },
  { name: "SiBootstrap", imgAlt: "Bootstrap" },
  { name: "SiGit", imgAlt: "Git" },
  { name: "SiVisualstudio", imgAlt: "Visual Studio Code" },
  { name: "SiNextdotjs", imgAlt: "Next JS" },
  { name: "FaNode", imgAlt: "Node.JS" },
  { name: "SiTypescript", imgAlt: "TypeScript" },
];

export default function Technologies(): JSX.Element {
  return (
    <div id="technologies" className="text-center flex flex-col justify-center h-screen mt-10">
      <h2 className="text-[63px]">Skills & Technologies</h2>
      <p className="text-xl">The main area of my knowledge is front-end </p>
      <ul className="flex mt-20 gap-16 flex-wrap justify-center">
        {technologies.map((tech, index) => (
          <SingleTechnology key={index} {...tech} />
        ))}
      </ul>
    </div>
  );
}
