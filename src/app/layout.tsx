import { Inter } from "next/font/google";
import "../styles/globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Giedrius | Front-End Developer",
  description: "Portfolio of Giedrius Simonavičius",
  icons: {
    icon: "./assets/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
