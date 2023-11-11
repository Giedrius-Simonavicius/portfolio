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
};

export default function SingleProject({ type, about, technologiesUsed, img, app, code, reverse }: SingleProjectProps) {
  return reverse ? (
    <div className="flex my-20 gap-20 items-center ">
      <div className="relative flex items-center justify-center w-[50%] shadow-xl shadow-gray-400 rounded-xl group duration-200 hover:gradient-from-to-r">
        <Image className="rounded-xl duration-700 group-hover:opacity-20" src={img} alt="online shop" />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
          <Link href={app}>
            <p className="mb-28 slider text-5xl">Application</p>
          </Link>
          <Link href={code}>
            <p className="slider text-4xl my-4">{`<  Code  >`}</p>
          </Link>
        </div>
      </div>
      <div>
        <Link className="hover:text-purple-700 duration-150" href={app}>
          <h3 className="text-3xl text-left">{type}</h3>
        </Link>
        <p className="my-10 text-left">{about}</p>
        <p className="text-lg text-left">Technologies used: {technologiesUsed}</p>
      </div>
    </div>
  ) : (
    <div className="flex mt-20 gap-20 items-center mb-20">
      <div>
        <Link className="hover:text-blue-700 duration-150" href={app}>
          <h3 className="text-3xl text-left">{type}</h3>
        </Link>
        <p className="my-10 text-left">{about}</p>
        <p className="text-lg text-left">Technologies used: {technologiesUsed}.</p>
      </div>

      <div className="relative flex items-center justify-center md:w-[50%] shadow-xl shadow-gray-400 rounded-xl group duration-200 hover:gradient-from-to-r">
        <Image className="rounded-xl duration-700 group-hover:opacity-20" src={img} alt="online shop" />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
          <Link href={app}>
            <p className="mb-28 slider text-5xl">Application</p>
          </Link>
          <Link href={code}>
            <p className="slider text-4xl my-4">{`<  Code  >`}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
