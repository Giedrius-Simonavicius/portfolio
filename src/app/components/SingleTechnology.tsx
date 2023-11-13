import React from "react";
import { FaNode } from "react-icons/fa6";
import * as SiIcons from "react-icons/si";

type SiIconsType = typeof SiIcons & {
  [key: string]: React.ComponentType<any>;
};

type SingleTechnologyProps = {
  name: string;
  imgAlt: string;
};

const getSiIcon = (name: string) => {
  const icon = (SiIcons as SiIconsType)[name];
  if (icon) {
    return icon;
  }
};

const SingleTechnology: React.FC<SingleTechnologyProps> = ({ name, imgAlt }) => {
  const TechnologyIcon = getSiIcon(name) || FaNode;

  return (
    <li className="flex flex-col items-center">
      <TechnologyIcon size={60} />
      <h3 className="text-xl mt-3 font-semibold">{imgAlt}</h3>
    </li>
  );
};

export default SingleTechnology;
