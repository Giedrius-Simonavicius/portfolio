import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Me from "./components/Me";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

export default function Home() {
  return (
    <main>
      <Me />
      <AboutMe />
      <Technologies />
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  );
}
