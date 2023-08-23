import React from "react";
import styled from "styled-components";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";

function ExperiencePage() {
  const cardsData = [
    {
      imageSrc: "https://i.ibb.co/L0HDJvG/images-3.jpg",
      buttonText: "MULTIPLY YOUR POINTS",
    },
    {
      imageSrc: "https://i.ibb.co/TWx6V4b/images-1.jpg",
      buttonText: "GET AWAY AND SAVE MORE",
    },
    {
      imageSrc: "https://i.ibb.co/dczMsVS/images-1.jpg",
      buttonText: "EARN UP TO 130K POINTS",
    },
    {
      imageSrc: "https://i.ibb.co/9Vx71vj/Cinnamon-Grand-1.jpg",
      buttonText: "A NIGHT ON US",
    },
    {
      imageSrc: "https://i.ibb.co/ssLpGWL/images-2.jpg",
      buttonText: "3 NIGHTS UNDER $250",
    },
    {
      imageSrc: "https://i.ibb.co/ssLpGWL/images-2.jpg",
      buttonText: "EARN UP TO 3X POINTS ON EVERY STAY",
    },
    // Add more card data as needed
  ];

  return (
    <MainCardGrid>
      <h1>Experience Something New</h1>
      <p>
        Close to home or across the world, Hilton is there for you with
        memorable offers and experience. Check out ...{" "}
      </p>
      <SecondMainContainer>
        <CardGrid>
          {cardsData.map((card, index) => (
            <ExperienceCard
              key={index}
              imageSrc={card.imageSrc}
              buttonText={card.buttonText}
            />
          ))}
        </CardGrid>
      </SecondMainContainer>
    </MainCardGrid>
  );
}

export default ExperiencePage;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  max-width: 100%;
  /* margin: 0 auto; */
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SecondMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainCardGrid = styled.div`
  margin-top: 100px;
  padding: 20px;

  h1 {
    font-family: "Metal", cursive;
    color: #18477d;
    font-size: 60px;
  }
`;

// Add your styled components here if needed
