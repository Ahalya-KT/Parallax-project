import React from "react";
import { Fade, Zoom, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    caption: "Elevation over expectation",
  },

  {
    url: "https://img.freepik.com/premium-photo/reflection-lake-foot-mountains-evening-it-represents-natural-environment-silence-peace-created-with-generative-ai_529424-1333.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=ais",
    caption: "Where the mountains whisper tranquility",
  },

  {
    url: "https://img.freepik.com/premium-photo/discovering-lake-braies-simple-educational-insight-711_957479-3599.jpg",
    caption: "Exploring the heartbeat of the city.",
  },

  {
    url: "https://img.freepik.com/free-vector/background-with-natural-landscape-concept_23-2148650299.jpg",
    caption: "Where every stone has a story",
  },
];

//   adding styles
const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "400px",
  backgroundSize: "cover",
};

const spanStyle = {
  fontSize: "20px",
  background: "#efefef",
  color: "#000000",
};
function ImageSlider() {
  return (
    <div className="slide-container">
      <Fade>
        {slideImages.map((image, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${image.url})` }}>
              <span style={{ spanStyle }}>{image.caption}</span>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default ImageSlider;
