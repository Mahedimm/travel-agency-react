import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive "}
        >
             <h1 className="slide-title">{slide.title}</h1>
            <button className='slide-button'>learn more</button>
          <img className="slide-image" src={slide.urls} alt=""  />   
         
        </div>
      ))}
    </>
  );
}

export default SliderContent;