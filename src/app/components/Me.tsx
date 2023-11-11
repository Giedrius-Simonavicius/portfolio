import Link from "next/link";
import Contacts from "./Contacts";
import { AiOutlineArrowDown } from "react-icons/ai";
import NextInfo from "./NextInfo";

export default function Me() {
  return (
    <div className="flex costBg ">
      <div className="h-screen flex flex-col justify-center  ">
        <h1 className="text-[63px] -mt-10 mb-4 font-bold tracking-wide">Giedrius Simonavičius</h1>
        <h2 className="text-2xl italic mb-3 font-semibold">Junior Front-End Web developer</h2>
        <NextInfo whereTo="About me" link="about" />
      </div>
      <Contacts />
    </div>
  );
}
