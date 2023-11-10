import Link from "next/link";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
export default function ContactMe() {
  return (
    <div className="flex items-center gap-6 justify-center mx-auto py-4">
      <Link href="https://www.linkedin.com/in/giedrius-simonavi%C4%8Dius-472936258/">
        <div title="LinkedIn" className="rounded-full scale-125 shadow-lg shadow-gray-400 p-3 cursor-pointer ">
          <BiLogoLinkedin />
        </div>
      </Link>
      <Link href="https://github.com/Giedrius-Simonavicius">
        <div title="GitHub" className="rounded-full shadow-lg scale-125 shadow-gray-400 p-3 cursor-pointer ">
          <AiFillGithub />
        </div>
      </Link>
      <a href="mailto:giedrius.simonavicius123@gmail.com">
        <div
          title="email to: giedrius.simonavicius123@gmail.com"
          className="rounded-full shadow-lg scale-125 shadow-gray-400 p-3 cursor-pointer "
        >
          <AiOutlineMail />
        </div>
      </a>
    </div>
  );
}
