import Image from "next/image";
import Logo from "../../public/assets/logo.png";

export default function Home() {
  return (
    <main>
      <div>main</div>
      <Image src={Logo} alt="log" width={70} quality={100} placeholder="blur" />
    </main>
  );
}
