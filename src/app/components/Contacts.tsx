import Link from "next/link";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa6";

type Contacts = {
  inline?: boolean;
};

export default function Contacts({ inline }: Contacts) {
  return (
    <div className={`flex ${inline ? "gap-10" : "flex-col ml-auto gap-5"}   justify-center  py-4`}>
      <Link href="https://www.linkedin.com/in/giedrius-simonavi%C4%8Dius-472936258/">
        <div
          title="LinkedIn"
          className="h-[50px] w-[50px] flex justify-center items-center hover:scale-125  hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.9)]  ease-in duration-150 rounded-full hover:shadow-gray-400  shadow-lg shadow-gray-400 p-3 "
        >
          <BiLogoLinkedin />
        </div>
      </Link>
      <Link href="https://github.com/Giedrius-Simonavicius">
        <div
          title="GitHub"
          className="h-[50px] w-[50px] flex justify-center items-center hover:scale-125  hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.9)]  ease-in duration-150 rounded-full hover:shadow-gray-400  shadow-lg shadow-gray-400 p-3 "
        >
          <AiFillGithub />
        </div>
      </Link>
      <Link href="https://www.facebook.com/giedrius.simonavicius.1/">
        <div
          title="Facebook"
          className="h-[50px] w-[50px] flex justify-center items-center hover:scale-125  hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.9)]  ease-in duration-150 rounded-full hover:shadow-gray-400  shadow-lg shadow-gray-400 p-3 "
        >
          <FaFacebookF />
        </div>
      </Link>
      <a href="mailto:giedrius.simonavicius123@gmail.com">
        <div
          title="email to: giedrius.simonavicius123@gmail.com"
          className="h-[50px] w-[50px] flex justify-center items-center hover:scale-125  hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.9)]  ease-in duration-150 rounded-full hover:shadow-gray-400  shadow-lg shadow-gray-400 p-3 "
        >
          <AiOutlineMail />
        </div>
      </a>
    </div>
  );
}
