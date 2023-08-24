import React, { useState, useEffect } from "react";
import "./secondnav.css";

function SecondNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    
    handleResize();

    
    window.addEventListener("resize", handleResize);

    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className={`mainDiv ${menuOpen && isMobile ? "open" : ""}`}>
        {isMobile && (
          <button className="menuButton" onClick={toggleMenu}>
            ☰ 
          </button>
        )}
        <ul className={`menuItems ${menuOpen && isMobile ? "open" : "navlist"}`}>
          <li>
            <a href="##">ABOUT</a>
          </li>
          <li>
            <a href="##">ROOMS & SUITES</a>
          </li>
          <li>
            <a href="##">DINNER</a>
          </li>
          <li>
            <a href="##">EXPERIENCE</a>
          </li>
          <li>
            <a href="##">EVENTS</a>
          </li>
          <li>
            <a href="##">GALLERY</a>
          </li>
          <li>
            <a href="##">OFFERS</a>
          </li>
          <li>
            <a href="##">MORE</a>
          </li>
          <li>
            <button className="findButton">FIND A HOTEL</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SecondNav;
