// CardCollection.js
import React, { useState } from "react";
import Card from "../components/OfferTwo/Card";
import "./cardCollection.css";

const initialCardsData = [
  {
    image: "https://i.ibb.co/JqY6Lnr/images-6.jpg",
    text1: "Rooms & Suites",
    date: "02 Aug 2023 - 28 Sep 2023",
    text2: "Shangri–La Exclusive Rate with Breakfast",
    text3: "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
    text4: "From LKR 58,462.20 Average Per Night",
    buttonLabel: "View All Details",
  },
  {
    image: "https://i.ibb.co/swktJ9j/image-5.webp",
    text1: "Rooms & Suites",
    date: "08 Aug 2023 - 28 Sep 2023",
    text2: "Shangri–La Circle Exclusive Member Rate",
    text3: "Exclusive Member Member Rate for Shangri-La Circle member.",
    text4: "From LKR 51,966.40 Average Per Night",
    buttonLabel: "View All Details",
  },
  {
    image: "https://i.ibb.co/TWx6V4b/images-1.jpg",
    text1: "Seasonal Events",
    date: "28 Aug 2023 - 08 Sep 2023",
    text2: "Whimsical Afternoon Tea at Sapphyr Lounge",
    text3: "Indulge in a Whimsical Afternoon Tea platter at Sapphyr Lounge",
    text4: "",
    buttonLabel: "View All Details",
  },
];

const additionalCardsData = [
  {
    image: "https://i.ibb.co/zRBtypk/Slider-Image-4.jpg",
    text1: "fafsfs",
    text2: "gghfhgfh",
    text3: "ytuythty",
    text4: "fgfhfhg",
    buttonLabel: "jnndsfjg",
  },
  {
    image: "https://i.ibb.co/JqY6Lnr/images-6.jpg",
    text1: "fafsfs",
    text2: "gghfhgfh",
    text3: "ytuythty",
    text4: "fgfhfhg",
    buttonLabel: "jnndsfjg",
  },
];

const CardCollection = () => {
  const [showAll, setShowAll] = useState(false);
  const cardsData = showAll
    ? [...initialCardsData, ...additionalCardsData]
    : initialCardsData;

  return (
    <div>
      <h1 className="offersText">Offers</h1>
      <div className="card-collection">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <button className="view-all-button" onClick={() => setShowAll(!showAll)}>
        View All
      </button>
    </div>
  );
};

export default CardCollection;
