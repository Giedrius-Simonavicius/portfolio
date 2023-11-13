import Link from "next/link";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa6";

type Contacts = {
  inline?: boolean;
  invertedColors?: boolean;
  sm?: boolean;
  navBar?: boolean;
};

export default function Contacts({ inline, invertedColors, sm, navBar }: Contacts) {
  return (
    <div
      className={`flex ${inline ? "gap-10" : "flex-col ml-auto gap-5"} justify-center ${
        sm ? "max-sm:hidden" : ""
      } py-4 max-sm:flex-wrap`}
    >
      <Link href="https://www.linkedin.com/in/giedrius-simonavi%C4%8Dius-472936258/">
        <div
          title="LinkedIn"
          className={`${
            invertedColors
              ? "hover:scale-110 shadow-[0px_0px_7px_7px_rgba(0,0,0,0.9)] hover:shadow-[0px_0px_15px_15px_rgba(0,0,0,0.9)] hover:shadow-gray-300 shadow-gray-400"
              : "hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.9)] hover:shadow-gray-400 shadow-gray-400 shadow-lg"
          } h-[50px] w-[50px] ${
            navBar ? "w-[35px]  p-0 h-[35px] " : ""
          } flex justify-center items-center hover:scale-125  ease-in duration-150 rounded-full p-3`}
        >
          <BiLogoLinkedin />
        </div>
      </Link>
      <Link href="https://github.com/Giedrius-Simonavicius">
        <div
          title="GitHub"
          className={`${
            invertedColors
              ? "hover:scale-110 shadow-[0px_0px_7px_7px_rgba(0,0,0,0.9)] hover:shadow-[0px_0px_15px_15px_rgba(0,0,0,0.9)] hover:shadow-gray-300 shadow-gray-400"
              : "hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.9)] hover:shadow-gray-400 shadow-gray-400 shadow-lg"
          } h-[50px] w-[50px] ${
            navBar ? "w-[35px]  p-0 h-[35px] " : ""
          } flex justify-center items-center hover:scale-125  ease-in duration-150 rounded-full p-3`}
        >
          <AiFillGithub />
        </div>
      </Link>
      <Link href="https://www.facebook.com/giedrius.simonavicius.1/">
        <div
          title="Facebook"
          className={`${
            invertedColors
              ? "hover:scale-110 shadow-[0px_0px_7px_7px_rgba(0,0,0,0.9)] hover:shadow-[0px_0px_15px_15px_rgba(0,0,0,0.9)] hover:shadow-gray-300 shadow-gray-400"
              : "hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.9)] hover:shadow-gray-400 shadow-gray-400 shadow-lg"
          } h-[50px] w-[50px] ${
            navBar ? "w-[35px]  p-0 h-[35px] " : ""
          } flex justify-center items-center hover:scale-125  ease-in duration-150 rounded-full p-3`}
        >
          <FaFacebookF />
        </div>
      </Link>
      <a href="mailto:giedrius.simonavicius123@gmail.com">
        <div
          title="email to: giedrius.simonavicius123@gmail.com"
          className={`${
            invertedColors
              ? "hover:scale-110 shadow-[0px_0px_7px_7px_rgba(0,0,0,0.9)] hover:shadow-[0px_0px_15px_15px_rgba(0,0,0,0.9)] hover:shadow-gray-300 shadow-gray-400"
              : "hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.9)] hover:shadow-gray-400 shadow-gray-400 shadow-lg"
          } h-[50px] w-[50px] ${
            navBar ? "w-[35px]  p-0 h-[35px] " : ""
          } flex justify-center items-center hover:scale-125  ease-in duration-150 rounded-full p-3`}
        >
          <AiOutlineMail />
        </div>
      </a>
    </div>
  );
}
