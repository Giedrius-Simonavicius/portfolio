import Link from "next/link";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

export default function ShortAbout() {
  return (
    <section className="text-center min-h-screen flex items-center justify-center flex-col">
      <p className="text-l">Hello, my name is</p>
      <h1 className="text-5xl my-4 font-bold">Giedrius Simonavičius</h1>
      <h2 className="text-2xl mb-3 font-semibold">Junior Front-End Web developer</h2>
      <p className="text-align mx-auto w-3/5">
        I love diving into the world of front-end development, creating responsive, user-friendly web applications.
        While my focus is on the front-end, I'm also actively learning and exploring back-end technologies. Always keen
        to learn and stay up-to-date with the latest tech trends
      </p>
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
    </section>
  );
}
