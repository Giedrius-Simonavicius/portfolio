"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <header
      className={`${
        shadow ? "shadow-xl" : ""
      } fixed top-0 left-0 right-0 px-5 z-[10] bg-bgColor flex justify-between items-center`}
    >
      <Link href="/">
        <img src="./assets/logo.png" alt="GS logo" width={120} />
      </Link>
      <nav>
        <ul className="flex gap-6 uppercase text-xl font-semibold tracking-wide">
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Technologies</Link>
          </li>
          <li>
            <Link href="#">My projects</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
