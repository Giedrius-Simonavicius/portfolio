import Link from "next/link";
import Contacts from "./Contacts";

export default function Me() {
  return (
    <div className="flex costBg ">
      <div className="h-screen flex flex-col justify-center  ">
        <h1 className="text-[63px] -mt-10 mb-4 font-bold tracking-wide">Giedrius Simonavičius</h1>
        <h2 className="text-2xl italic mb-3 font-semibold">Junior Front-End Web developer</h2>
        <Link href="#" className="group w-fit tracking-wide text-lg text-[#25598e] mt-6 relative">
          <span className="border-b border-bgColor group-hover:border-purple-700 duration-150">About me</span>
          <span className="absolute ml-2 text-xl duration-150 group-hover:ml-6 group-hover:text-xl group-hover:text-purple-700 ">
            {"\u2192"}
          </span>
        </Link>
      </div>
      <Contacts />
    </div>
  );
}
