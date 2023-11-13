import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type SingleProjectProps = {
  type: string;
  about: string;
  technologiesUsed: string;
  img: StaticImageData;
  app: string;
  code: string;
  reverse?: boolean;
  white?: boolean;
};

export default function SingleProject({
  type,
  about,
  technologiesUsed,
  img,
  app,
  code,
  reverse,
  white,
}: SingleProjectProps) {
  return (
    <div
      className={`${white ? "opacity-90" : ""} ${
        reverse ? "flex-row-reverse" : ""
      } max-md:flex-col-reverse flex my-20 gap-20 max-lg:gap-13 max-md:mb-56 max-sm:gap-5  items-center`}
    >
      <div className="relative max-lg:w-[100%] flex items-center justify-center w-[50%] shadow-xl shadow-gray-400 rounded-xl group duration-200 hover:gradient-from-to-r">
        <Image className="rounded-xl duration-700 group-hover:opacity-20" src={img} alt="online shop" />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
          <Link href={app}>
            <p className="mb-28 max-lg:mb-10 slider max-lg:text-3xl max-sm:mb-0 text-5xl">Application</p>
          </Link>
          <Link href={code}>
            <p className="slider text-4xl max-lg:text-2xl  my-4">{`<  Code  >`}</p>
          </Link>
        </div>
      </div>
      <div className="max-md:flex hidden items-center gap-10 ">
        <Link href={app}>
          <p className="text-2xl max-xs:text-lg">Application</p>
        </Link>
        <Link href={code}>
          <p className="text-2xl max-xs:text-lg my-4">{`<  Code  >`}</p>
        </Link>
      </div>
      <div>
        <Link className="hover:text-purple-700 duration-150" href={app}>
          <h3 className="text-3xl max-md:text-center text-left max-md:text-2xl">{type}</h3>
        </Link>
        <p className="my-10 max-md:text-center text-left">{about}</p>
        <p className="text-lg max-md:text-center text-left">Technologies used: {technologiesUsed}</p>
      </div>
    </div>
  );
}
