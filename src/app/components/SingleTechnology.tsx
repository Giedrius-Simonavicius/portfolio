import React from "react";
import { FaNode } from "react-icons/fa6";
import * as SiIcons from "react-icons/si";

// Define a type for SiIcons with an index signature
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
      <TechnologyIcon size={100} />
      <h3 className="text-xl font-semibold">{imgAlt}</h3>
    </li>
  );
};

export default SingleTechnology;
