import Image from "next/image";
import Contacts from "./Contacts";
import BgImg from "../../../public/assets/contact-bg.jpg";

export default function ContactMe() {
  return (
    <section
      id="contactMe"
      className="text-center relative flex flex-col justify-center gap-40 max-sm:gap-20 items-between h-screen max-sm:-mt-[200px]"
    >
      <Image className="absolute opacity-10 -z-10" src={BgImg} alt="background image" />
      <h2 className="max-md:text-4xl">Contact me</h2>
      <Contacts inline invertedColors />
    </section>
  );
}
