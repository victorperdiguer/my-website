import React from "react";
import './Nav.css';
import {AiOutlineHome, AiOutlineUser, AiOutlineProfile, AiOutlineMessage, AiOutlineFileDone} from 'react-icons/ai';
import { useState } from "react";


const Nav = (props) => {
  const [activeNav, setActiveNav] = useState('#');
  const handleActive = (e) => {
    const anchor = e.target.closest('a');
    setActiveNav(anchor.getAttribute('href'));
  }

  return (
    <nav>
      <a href="#" onClick={handleActive} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={handleActive} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#skills" onClick={handleActive} className={activeNav==='#skills' ? 'active' : ''}><AiOutlineProfile/></a>
      <a href="#qualification" onClick={handleActive} className={activeNav==='#qualification' ? 'active' : ''}><AiOutlineFileDone/></a>
      <a href="#contact" onClick={handleActive} className={activeNav==='#contact' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
};

export default Nav;
