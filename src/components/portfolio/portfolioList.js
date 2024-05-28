import colorly from "../../assets/colorly.png";
import kolory from "../../assets/kolory.png";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";

export const portfolioList = [
  {
    title: "Colorly",
    description: "A DOM recursion game built with HTML, CSS, and JavaScript",
    image: colorly,
    demoURL: "https://victorperdiguer.github.io/colorly/",
    githubURL: "https://github.com/victorperdiguer/colorly",
    technologies: [AiFillHtml5, IoLogoCss3, IoLogoJavascript],
  },
  {
    title: "Kolory",
    description: "A multi-function NextJS color palette generator",
    image: kolory,
    demoURL: "https://kolory-phi.vercel.app/",
    demoURL: "https://victorperdiguer.github.io/kolory/",
    technologies: [TbBrandNextjs, SiTypescript, SiMongodb],
  }
];
