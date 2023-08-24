import React, { useState } from "react";
import "./navBar.css";
import SecondNav from "../SecondNav/SecondNav";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="MainDiv">
        <div>
          <img
            className="logo"
            src="https://i.ibb.co/qjhfWQ8/logo.webp"
            alt="Logo"
          />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
        </div>
        <ul className={`Ulitem ${menuOpen ? "open" : ""}`}>
          <li>
            <div className="icon_div">
              <img
                className="profile_icon"
                src="https://i.ibb.co/9hrpmZZ/profile.png"
                alt="profile_icon"
              />
              <a href="##">SigIn</a>
            </div>
          </li>
          <li className="separator">|</li>
          <li>
            <a href="##">Join Now</a>
          </li>
          <li className="separator">|</li>
          <li>
            <a href="##">Find Reservation</a>
          </li>
          <li className="separator">|</li>
          <li>
            <div className="icon_div">
              <img
                className="language_icon"
                src="https://i.ibb.co/RctsKCK/language-icon.png"
                alt="language_icon"
              />
              <a href="##">English</a>
            </div>
          </li>
          <li className="separator">|</li>
          <li>
            <a href="##">LKR</a>
          </li>
        </ul>
      </div >
      <SecondNav />
    </div >
  );
}

export default NavBar;
