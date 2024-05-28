import React from "react";
import Header  from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = (props) => {
  return (
    <>
      <Header />
      <Nav />
      <About/>
      <Skills/>
      <Qualification/>
      {/* <Services/> */}
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
};

export default App;
