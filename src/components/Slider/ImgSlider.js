import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <MainDiv>
      <Carousel {...settings}>
        <Wrap>
          <img src="https://i.ibb.co/0Qgz1V6/Slider-Image-3.jpg" alt="image1" />
        </Wrap>
        <Wrap>
          <img src="https://i.ibb.co/zRBtypk/Slider-Image-4.jpg" alt="image2" />
        </Wrap>
        <Wrap>
          <img src="https://i.ibb.co/BrRCMyW/Slider-Image-2.jpg" alt="image3" />
        </Wrap>
        <Wrap>
          <img src="https://i.ibb.co/VHZJRQf/Slider-Image-1.jpg" alt="image4" />
        </Wrap>
      </Carousel>
    </MainDiv>
  );
}

export default ImgSlider;

const MainDiv = styled.div`
  position: relative;
`;

const Carousel = styled(Slider)`
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  line-height.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: hidden;
  }
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border-radius: 4px;
    width: 100%;
    height: 750px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
  }
`;
