import React, { useEffect, useState } from "react";
import {
  AiFillLeftCircle,
  AiFillRightCircle,
  AiOutlineTag,
  AiOutlineUser,
} from "react-icons/ai";
import "./imageSlider.css";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const ImageSlider = () => {
  const [room, setRoom] = useState("");
  const [adult, setAdult] = useState("");
  const [Children, setChildren] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "./assets/images/slide1.jpg",
    "./assets/images/slide2.jpg",
    "./assets/images/slide3.jpg",
    "./assets/images/slide4.jpg",
    "./assets/images/slide5.jpg",
  ];

  const handleRoomChange = (event) => {
    setRoom(event.target.value);
  };

  const handleAdultChange = (event) => {
    setAdult(event.target.value);
  };

  const handleChildrenChange = (event) => {
    setChildren(event.target.value);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  const goToNextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="homepage">
      <img
        className="background-image"
        src={images[currentImage]}
        alt={`Slide ${currentImage + 1}`}
      />
      <div className="overlay">
        <div className="image-dots">
          {images.map((image, index) => (
            <div
              key={index}
              className={`image-dot ${index === currentImage ? "active" : ""}`}
              onClick={() => goToImage(index)}
            ></div>
          ))}
        </div>

        <div className="prev-btn">
          <button
            onClick={() =>
              goToImage((currentImage - 1 + images.length) % images.length)
            }
            className="nav-button"
          >
            <AiFillLeftCircle
              style={{
                height: "50px",
                width: "50px",
                opacity: 0.4,
              }}
            />
          </button>
        </div>

        <div className="heading-container">
          <h1 className="main-heading">
            Extensive and versatile events space{" "}
          </h1>
          <span className="sub-heading">
            Discover a large and versatile event space in Sri Lanka{" "}
          </span>
        </div>

        <div className="nxt-btn">
          <button
            onClick={() => goToImage((currentImage + 1) % images.length)}
            className="nav-button"
          >
            <AiFillRightCircle
              style={{
                height: "50px",
                width: "50px",
                opacity: 0.4,
              }}
            />
          </button>
        </div>
        <div className="footer">
          <div className="discover">Discover more &gt; </div>
          <div className="search-bar">
            <div className="date-picker">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="From"
                  sx={{
                    marginLeft: "5px",
                    marginRight: "5px",
                    width: "150px",
                  }}
                />

                <DatePicker
                  label="To"
                  sx={{
                    marginLeft: "5px",
                    marginRight: "5px",
                    width: "150px",
                  }}
                />
              </LocalizationProvider>
            </div>

            <div className="category">
              <div
                style={{ height: "30px", width: "30px", margin: "0px 10px" }}
              >
                <AiOutlineUser />
              </div>

              <div className="select-container">
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="room-label">Room</InputLabel>
                  <Select
                    labelId="room-label"
                    id="room-select"
                    value={room}
                    onChange={handleRoomChange}
                    label="Room"
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="select-container">
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="adult-label" sx={{ margin: "0px 5px" }}>
                    Adult
                  </InputLabel>
                  <Select
                    labelId="adult-label"
                    id="adult-select"
                    value={adult}
                    onChange={handleAdultChange}
                    label=" Adult"
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="select-container">
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="children-label" sx={{ margin: "0px 5px" }}>
                    Children
                  </InputLabel>
                  <Select
                    labelId="children-label"
                    id="children-select"
                    value={Children}
                    label=" Room"
                    onChange={handleChildrenChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="special-code">
              <AiOutlineTag
                style={{
                  height: "25px",
                  width: "25px",
                  margin: "0px 10px",
                }}
              />

              <TextField
                id="standard-basic"
                label="Special Code"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
              />
            </div>

            <div className="search-btn-container">
              <button className="search-btn">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
