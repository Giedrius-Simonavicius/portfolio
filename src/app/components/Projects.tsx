import SingleProject from "./SingleProject";
import onlineShopImg from "../../../public/assets/projects/online-shop.png";
import porfolioImg from "../../../public/assets/projects/portfolio.png";
import phangmanImg from "../../../public/assets/projects/hangman.png";

export default function Projects() {
  return (
    <section
      id="projects"
      className="text-center max-xs:pt-[800px] max-sm:pt-[450px] max-md:pt-[150px]  max-md:scroll-m-0 scroll-m-32 container mt-20 max-xs:scroll-m-[-600px] max-sm:scroll-m-[-250px]"
    >
      <h2>Portfolio & Projects</h2>
      <SingleProject
        type="E-COMMERCE WEBSITE"
        about="Dummy online store for PC's, laptops, etc... with responsive and user friendly design."
        technologiesUsed="React JS, JavaScript, Tailwind CSS, Firebase "
        img={onlineShopImg}
        app="https://giedrius-online-shop.netlify.app/"
        code="https://github.com/Giedrius-Simonavicius/online-shop"
        reverse
        white
      />
      <SingleProject
        type="PORTFOLIO WEBSITE"
        about="My personal porfolio website where you can find information about me and projects that I made."
        technologiesUsed="Next JS,
        TypeScript,
        Tailwind CSS"
        img={porfolioImg}
        app="http://giedriussimonavicius.com/"
        code="https://github.com/Giedrius-Simonavicius/portfolio"
      />
      <SingleProject
        type="HANGMAN GAME"
        about="Very simple front-end only hangman game. This is my first project using typescript."
        technologiesUsed="
        TypeScript
        "
        img={phangmanImg}
        app="https://giedrius-hangman.netlify.app/"
        code="https://github.com/Giedrius-Simonavicius/Hangman-TS-react"
        reverse
        white
      />
    </section>
  );
}
