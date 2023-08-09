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
    <section className="bg-banner relative">
      <div className="container">
        <div className="absolute top-0 left-0 bg-[#000000] w-full h-full -z-10"></div>
        <div className=" py-40 z-20">
          <h1 className="text-white text-6xl font-popins font-bold w-full lg:w-[842px] leading-normal ">
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
