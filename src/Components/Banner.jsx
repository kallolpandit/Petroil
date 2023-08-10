import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="py-3 px-6  text-white z-40 text-center w-fit absolute top-1/2 right-3 cursor-pointer"
      onClick={onClick}
    >
      <BsArrowRight />{" "}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="py-3 px-6  text-white z-40 text-center w-fit absolute top-1/2 left-3 cursor-pointer"
      onClick={onClick}
    >
      <BsArrowLeft />
    </div>
  );
}

export const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="bg-banner">
      <div>
        <Slider {...settings}>
          <div>
            <div className="container">
              <div className="absolute top-0 left-0 bg-[#0000001d] w-full h-full -z-10"></div>
              <div className=" py-40 pl-16 z-20">
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
          </div>
          <div>
            <div className="container">
              <div className="absolute top-0 left-0 bg-[#0000001d] w-full h-full -z-10"></div>
              <div className=" py-40 pl-16 z-20">
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
          </div>
          <div>
            <div className="container">
              <div className="absolute top-0 left-0 bg-[#0000001d] w-full h-full -z-10"></div>
              <div className=" py-40 pl-16 z-20">
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
          </div>
          <div>
            <div className="container">
              <div className="absolute top-0 left-0 bg-[#0000001d] w-full h-full -z-10"></div>
              <div className=" py-40 pl-16 z-20">
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
          </div>
        </Slider>
      </div>
    </section>
  );
};
