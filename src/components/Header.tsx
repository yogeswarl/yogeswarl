"use client";
import * as React from "react";
import { useState,useEffect } from "react";
import Style from '../app/page.module.scss'
import Link from 'next/link'
import { NextFont } from "next/dist/compiled/@next/font";
interface font {
  font : NextFont
}
interface mobile {
  width: number | undefined,
  height: number | undefined,
}
export const Header : React.FC<font> = ({font}) : JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  const [isMobile, setIsMobile] = useState<mobile>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setIsMobile({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
const secondaryFont = font.className;

return (
  <header className={`${Style['pos-fixed']} ${Style.header}`}>
    <ul className={`${Style["container"]} ${Style.nav} ${Style.fx} ${Style['fx-sb']} ${secondaryFont}`}>
      <li>
        <Link href={"/"} className={`${Style['tc-white']} ${Style['Logo']} ${Style["fw-semibold"]}`}>Yogeswar</Link>
      </li>
      <li className={`${Style['pos-rel']}`}>
      {isMobile.width && isMobile.width < 768 ? <button className={`${Style['tc-white']} ${Style["hamburger-icon"]} ${isMenuOpen ? Style["open"]: null} ` } onClick={toggleMenu}></button> : null}
        {(isMenuOpen || isMobile.width && isMobile.width >768) && <ul className={`${Style.fx} ${isMobile.width && isMobile.width < 768 ? Style["mobile-nav"] : null }`}>        
          <li key="experience"><Link href={"#experience"} className={`${Style['tc-white']} ${Style['mr-4']} ${Style["fw-semibold"]}`}>Experience</Link></li>
          <li key="Education"><Link href={"#education"} className={`${Style['tc-white']} ${Style['mr-4']} ${Style["fw-semibold"]}`}>Education</Link></li>
          <li key="Projects"><Link href={"#projects"} className={`${Style['tc-white']} ${Style['mr-4']} ${Style["fw-semibold"]}`}>Projects</Link></li>
          <li key="Skills"><Link href={"#skills"} className={`${Style['tc-white']} ${Style['mr-4']} ${Style["fw-semibold"]}`}>Skills</Link></li>
          <li key="Socials"><Link href={"#socials"} className={`${Style['tc-white']} ${Style["fw-semibold"]}`}>Socials</Link></li>
        </ul>
        }
      </li>
    </ul>
  </header>
)
}