import React from "react";
import "./selectcard.css";

function SelectCard() {
  return (
    <div>
      <div className="mainDivv">
        <img
          className="srilankaImage"
          src="https://i.ibb.co/ZKQFsz5/sri-lanka.png"
          alt="image2"
        />
        <img
          className="hotelImage"
          src="https://i.ibb.co/9Vx71vj/Cinnamon-Grand-1.jpg"
          alt="image1"
        />
        <div className="destinationsCard">
          <h1>Cinnamon Life</h1>
          <div>
            <p>
              Take a peek at the 4.5 million sq.ft urban sanctuary as the
              epicentre of modern South Asia
            </p>
          </div>
          <button>Discover More</button>
        </div>
      </div>
    </div>
  );
}

export default SelectCard;
