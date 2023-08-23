import React, { useState } from "react";
import "./dropdow.css";

function DropDown() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <p>Cinnamon Life</p>
        <img
          className="down-arrow"
          src="https://i.ibb.co/Nx0n7fF/down-arrow.png"
          alt="down-arrow"
        />
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div className="dropdown-item">Cinnamon Life</div>
          <div className="dropdown-item">Weddings</div>
          <div className="dropdown-item">Gallery</div>
          <div className="dropdown-item">Life</div>
        </div>
      )}
    </div>
  );
}

export default DropDown;
