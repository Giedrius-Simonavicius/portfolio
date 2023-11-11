import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowDown } from "react-icons/ai";
import NextInfo from "./NextInfo";

export default function AboutMe() {
  return (
    <div id="about" className="h-screen flex flex-col justify-center">
      <div className="flex justify-between ">
        <h2 className="text-5xl">Hi, I'm Giedrius! </h2>
        <div className="w-2/3 text-xl mb-8">
          <p className="mb-3 ">
            I love diving into the world of front-end development, creating responsive, user-friendly web applications.
          </p>
          <p>
            {" "}
            While my focus is on the front-end, I'm also actively learning and exploring back-end technologies. Always
            keen to learn and stay up-to-date with the latest tech trends.
          </p>
        </div>
      </div>{" "}
      <p className="mb-3 text-xl">
        My interest in web development started years ago but it was put on hold until the time was right for me to
        change my career path.
      </p>
      <p className="mb-3 text-xl">
        In the end of 2022 I started learning code, took first course I loved it! In 2023 i took another course that
        deep dived into front-end coding using technologies like React.js, JavaScript, CSS, HTML.
      </p>
      <p className="text-xl">
        While I don't have formal experience, I have gained valuable exposure to modern technologies and libraries
        through courses and my personal{" "}
        <Link
          className="underline text-textGray hover:text-[#1e4b79] duration-200"
          href="https://giedrius-online-shop.netlify.app/"
        >
          project
        </Link>
        . I am committed to continuous learning. At the moment I'm have started to scratch surfaces of TypeScript,
        Node.js and Next.js.
      </p>
      <NextInfo whereTo="Technologies" link="technologies" />
    </div>
  );
}
