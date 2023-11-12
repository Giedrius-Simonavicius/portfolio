import { Rubik } from "next/font/google";
import "../styles/globals.css";
import Head from "next/head";
import Navbar from "./components/Navbar";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Giedrius | Front-End Developer",
  description: "Portfolio of Giedrius Simonavičius",
  icons: {
    icon: "./assets/logo_dark.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body id="body" className={`bg-bgColor  `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
