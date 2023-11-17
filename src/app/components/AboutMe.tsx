import Image from "next/image";
import Link from "next/link";
import PhotoOfMe from "../../../public/assets/me_Bg_Img.jpg";
export default function AboutMe() {
  return (
    <section
      id="about"
      className="h-screen container relative flex max-sm:pt-[300px] max-xs:pt-[400px] flex-col justify-center max-xs:scroll-m-32 max-sm:scroll-m-15"
    >
      <div className="flex max-sm:flex-col justify-between opacity-50">
        <Image
          className="absolute top-[20%] left-0 -z-10"
          src={PhotoOfMe}
          alt="Photo of Giedrius"
          style={{ width: "auto", height: "66%" }}
          priority={true}
        />
        <h2 className="text-5xl max-sm:text-center max-sm:mb-24 w-1/6 max-sm:w-full my-auto max-md:text-4xl">
          Hi, I'm Giedrius!{" "}
        </h2>
        <div className="w-2/3 max-sm:w-full max-sm:text-justify text-xl max-sm:my-8">
          <p className="mt-8 mb-5 ">
            I love diving into the world of front-end development, creating responsive, user-friendly web applications.
          </p>
          <p>
            {" "}
            While my focus is on the front-end, I'm also actively learning and exploring back-end technologies. Always
            keen to learn and stay up-to-date with the latest tech trends.
          </p>
        </div>
      </div>{" "}
      <p className="mb-3 mt-10 text-xl max-sm:text-justify  max-sm:text-xl opacity-50">
        My interest in web development started years ago but it was put on hold until the time was right for me to
        change my career path.
      </p>
      <p className="mb-3 max-sm:my-8 text-xl max-sm:text-justify  max-sm:text-xl opacity-50">
        In the end of 2022 I started learning code, took first course and I loved it! In 2023 I signed up for another
        course that deep dived into front-end coding using technologies like React.js, JavaScript, CSS, HTML.
      </p>
      <p className="text-xl max-sm:text-justify  max-sm:text-xl opacity-50">
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
    </section>
  );
}
