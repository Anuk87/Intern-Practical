import React from "react";
import "./card.css";

function Card({ image, date, text1, text2, text3, text4 }) {
  return (
    <div>
      <div className="mainDivContainer">
        <img className="imgClass" src={image} alt="image2" />
        <div className="mianTextContainer">
          <div className="textContainer">
            <p className="heading">{text1}</p>
            <p className="date">{date}</p>
            <p className="thirdText">{text2}</p>
            <p className="fourthtext">{text3}</p>
            <p className="price">{text4}</p>
          </div>
        </div>

        <div>
          <button className="buttonClass">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
