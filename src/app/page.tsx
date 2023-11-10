import AboutMe from "./components/AboutMe";
import Me from "./components/Me";
import Technologies from "./components/Technologies";

export default function Home() {
  return (
    <main className="container">
      <Me />
      <AboutMe />
      <Technologies />
    </main>
  );
}
