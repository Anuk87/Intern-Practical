import React from "react";
import { styled } from "styled-components";
import DropDown from "../components/Dropdown/DropDown";
import SelectCard from "../components/SelectionCard.js/SelectCard";

function DestinationsPage() {
  return (
    <MainDiv>
      <h2>Our Destinations</h2>
      <div>
        <DropDown />
        <SelectCard />
      </div>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  width: 100%;

  h2 {
    text-align: center;
    font-size: 60px;
    color: "#57316E";
    color: "#57316E";
    margin-top: 70px;
    font-family: "Metal", cursive;
    color: #57316e;
  }
`;

export default DestinationsPage;
