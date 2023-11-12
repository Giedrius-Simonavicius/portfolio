import Image from "next/image";
import Contacts from "./Contacts";
import BgImg from "../../../public/assets/contact-bg.jpg";

export default function ContactMe() {
  return (
    <section id="contactMe" className="text-center relative flex flex-col justify-center gap-40 items-between h-screen">
      <Image className="absolute opacity-10 -z-10" src={BgImg} alt="background image" />
      <h2 className="">Contact me</h2>
      <Contacts inline invertedColors />
    </section>
  );
}
