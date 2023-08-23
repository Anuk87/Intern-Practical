import React from "react";
import { styled } from "styled-components";

function ExperienceCard({ imageSrc, buttonText }) {
  return (
    <CardContainerMain>
      <CardContainer>
        <CardImage src={imageSrc} alt="Card Image" />
        <DarkOverlay />
        <CardTextOverlay>{buttonText}</CardTextOverlay>
      </CardContainer>
    </CardContainerMain>
  );
}

export default ExperienceCard;

const CardContainerMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &:hover {
    box-shadow: 3px 3px 10px 6px rgba(107, 107, 107, 0.6);
  }
`;

const CardContainer = styled.div`
  width: 426px;
  height: 333px;
  position: relative;
  background: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const CardTextOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 45px;
  color: white;
  font-size: 25px;
  padding: 10px 20px;
  border-radius: 5px;
`;
