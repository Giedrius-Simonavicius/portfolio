"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/Rx";
import Contacts from "./Contacts";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
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

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <header
      className={`${
        shadow ? "shadow-[0px_0px_5px_3px_rgba(0,0,0,0.9)] shadow-gray-400 " : ""
      } fixed top-0 left-0 right-0 px-5 z-[10] bg-bgColor flex justify-between items-center`}
    >
      <Link href="#body">
        <img src="./assets/logo_dark.png" alt="GS logo" width={120} />
      </Link>

      <nav className="md:hidden">
        {navOpen && <div className="fixed inset-0 bg-[#2c2e3c] z-[50]" onClick={closeNav}></div>}
        <RxHamburgerMenu size={50} onClick={handleNavToggle} />
        <div
          className={`flex flex-col justify-between fixed left-0 top-0 w-full h-full bg-[#2c2e3c] p-10 max-xs:p-1 max-sm:pt-0 ease-in duration-300 transform ${
            navOpen ? "translate-x-0" : "translate-x-full"
          } z-[60]`}
        >
          <div className="flex justify-between items-center">
            <Link href="#body" className="w-1/2" onClick={closeNav}>
              <img src="./assets/logo-burger.png" alt="GS logo" width={200} />
            </Link>
            <button
              onClick={closeNav}
              className={` shadow-gray-400 shadow-lg h-[80px] w-[80px] flex justify-center items-center rounded-full p-3 max-xs:h-[60px] max-xs:w-[60px] text-5xl max-xs:text-3xl `}
            >
              &times;
            </button>
          </div>
          <ul className="flex text-4xl max-xs:text-2xl flex-col items-center gap-12">
            <li>
              <Link onClick={closeNav} href="#about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={closeNav} href="#technologies">
                Technologies
              </Link>
            </li>
            <li>
              <Link onClick={closeNav} href="#projects">
                My projects
              </Link>
            </li>
            <li>
              <Link onClick={closeNav} href="#contactMe">
                Contact
              </Link>
            </li>
            <li className="border-b-2">
              <Link onClick={closeNav} href="/resume.pdf">
                CV
              </Link>
            </li>
          </ul>
          <Contacts navBar inline invertedColors />
        </div>
      </nav>

      <nav className="hidden md:flex">
        <ul className="flex text-textGray gap-6 uppercase text-xl font-semibold tracking-wider">
          <li>
            <Link className="hover:text-white duration-200" href="#about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-white duration-200   " href="#technologies">
              Technologies
            </Link>
          </li>
          <li>
            <Link className="hover:text-white duration-200   " href="#projects">
              My projects
            </Link>
          </li>
          <li>
            <Link className="hover:text-white duration-200 " href="#contactMe">
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-white duration-200 border-b border-textGray hover:border-white "
              href="/resume.pdf"
            >
              CV
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
