import SingleProject from "./SingleProject";
import onlineShopImg from "../../../public/assets/projects/online-shop.png";
import porfolioImg from "../../../public/assets/projects/portfolio.png";

export default function Projects() {
  return (
    <div id="projects" className="text-center flex flex-col justify-center h-screen mt-10">
      <h2>Portfolio & Projects</h2>
      <SingleProject
        type="E-COMMERCE APPLICATION"
        about="Dummy online store for PC's, laptops, etc... with responsive and user friendly design."
        technologiesUsed="React JS, JavaScript, Tailwind CSS, Firebase "
        img={onlineShopImg}
        app="https://giedrius-online-shop.netlify.app/"
        code="https://github.com/Giedrius-Simonavicius/online-shop"
        reverse
      />
      <SingleProject
        type="Portfolio website"
        about="My personal porfolio website where you can find information about me and projects that I made."
        technologiesUsed="Next JS,
        TypeScript,
        Tailwind CSS"
        img={porfolioImg}
        app="http://giedriussimonavicius.com/"
        code="https://github.com/Giedrius-Simonavicius/portfolio"
      />
      <SingleProject
        type="Hangman game"
        about="Very simple front-end only hangman game. This is my first project using typescript."
        technologiesUsed="
        TypeScript
        "
        img={porfolioImg}
        app="https://giedrius-hangman.netlify.app/"
        code="https://github.com/Giedrius-Simonavicius/Hangman-TS-react"
      />
    </div>
  );
}
