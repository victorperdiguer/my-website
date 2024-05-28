import guessr from "../../assets/guessrmock.png";
import devault from "../../assets/devault.png";
import wip from "../../assets/wip.jpg";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiHandlebarsdotjs } from "react-icons/si";
import { FiCode } from "react-icons/fi";
import { SiMongodb } from "react-icons/si";
import { GrNode } from "react-icons/gr";

export const portfolioList = [
  {
    title: "Guessr - DOM logic game",
    description: "A DOM logic game built with HTML, CSS, and JavaScript.",
    image: guessr,
    demoURL: "https://jormengin.github.io/Guessr/",
    githubURL: "https://github.com/jormengin/Guessr",
    technologies: [AiFillHtml5, IoLogoCss3, IoLogoJavascript],
  },
  {
    title: "Devault - Dev Tools platform",
    description: "A Dev Tools platform built with various technologies.",
    image: devault,
    demoURL: "https://devault-app.fly.dev/",
    githubURL: "https://github.com/deVault-io/devault",
    technologies: [AiFillHtml5, IoLogoCss3, IoLogoJavascript, SiHandlebarsdotjs, FiCode, SiMongodb, GrNode],
  },
  {
    title: "atmine - Fullstack rental webapp",
    description: "Fullstack app using MERN stack coming soon.",
    image: wip,
    demoURL: "https://jormengin.github.io/Guessr/",
    githubURL: "https://github.com/jormengin/Guessr",
    technologies: [AiFillHtml5, IoLogoCss3, IoLogoJavascript, SiHandlebarsdotjs, FiCode, SiMongodb, GrNode],
  }
];
