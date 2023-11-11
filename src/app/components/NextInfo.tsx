import Link from "next/link";
import { AiOutlineArrowDown } from "react-icons/ai";

type NextInfoProps = {
  whereTo: string;
  link: string;
  mt?: number;
};

export default function NextInfo({ whereTo, link, mt }: NextInfoProps) {
  return (
    <Link
      href={`#${link}`}
      className={`${mt ? `mt-${mt}` : "mt-6"} group w-fit tracking-wide text-lg text-[#25598e] relative`}
    >
      <span className="border-b border-bgColor group-hover:border-purple-700 duration-150">{whereTo}</span>
      <span className="absolute ml-2 text-xl duration-150 group-hover:text-xl mt-1">
        <AiOutlineArrowDown />
      </span>
    </Link>
  );
}
