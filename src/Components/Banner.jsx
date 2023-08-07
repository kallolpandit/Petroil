import React from "react";
import Slider from "react-slick";

export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <h3>hello</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Slider>
    </div>
  );
};
