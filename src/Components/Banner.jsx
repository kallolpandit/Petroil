import React from "react";
import Slider from "react-slick";

export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="relative pb-20">
      <div className="absolute top-0 left-0 w-full -z-10">
        <Slider {...settings}>
          <div>
            <div className="w-full">
              <div className="absolute top-0 left-0 w-full h-full bg-[#00000074]"></div>
              <img src="images/banner-bg.png" alt="banner-bg" />
            </div>
          </div>
        </Slider>
      </div>
      <div className="container">
        <div className="z-10  py-40">
          <h1 className="text-white text-6xl font-popins font-bold w-full lg:w-[842px] leading-normal">
            We exist since 1975 on the oil and gas industry.
          </h1>
          <div className="pt-7">
            <a
              href=""
              className="py-3 px-7 text-white text-base font-popins font-semibold bg-brand hover:text-brand hover:bg-white transition-all inline-block"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
