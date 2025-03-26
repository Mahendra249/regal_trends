
import React, { useState, useEffect } from "react";
import "./Slider.css";
import slide1 from "../../assets/cloth.jpg";
import slide2 from "../../assets/cloth.jpg";
import slide3 from "../../assets/cloth.jpg";
import mslide1 from "../../assets/cloth.jpg";
import mslide2 from "../../assets/cloth.jpg";
import mslide3 from "../../assets/cloth.jpg";


const Slider = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  const slides = [{ image: slide1 }, { image: slide2 }, { image: slide3 }];

  const mobileSliderImages = [
    { image: mslide1 },
    { image: mslide2 },
    { image: mslide3 },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 650);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeSlider = isMobile ? mobileSliderImages : slides;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % activeSlider.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + activeSlider.length) % activeSlider.length
    );
  };


  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container" >
      <div
        className="slides-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {activeSlider.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt="" className="slide-image" />
          </div>
        ))}
      </div>

      {/* <button className="nav-btn prev" onClick={handlePrev}>
        &#9664;
      </button>
      <button className="nav-btn next" onClick={handleNext}>
        &#9654;
      </button> */}

      <div className="indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
