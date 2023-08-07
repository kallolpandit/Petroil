import React from "react";

export const Services = () => {
  return (
    <section className="py-10">
      <div className="container"></div>
      <div className="flex items-center  gap-16">
        <div className=" bg-white w-1/3 pl-10">
          <h2 className="text-primary text-5xl font-popins font-bold w-full lg:w-[510px]">
            Our Services
          </h2>
          <p className="text-secondary text-lg font-popins font-normal w-full lg:w-[405px] pt-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="bg-services1 bg-right bg-no-repeat bg-1/2  py-20 pl-10 w-4/6 relative z-10">
          <div className="absolute top-0 left-0 bg-[#0000004d] w-full h-full -z-10"></div>
          <h3 className="text-white text-4xl font-popins font-bold pb-5 w-full lg:w[690px]">
            Modern natural oil and gas refineries.
          </h3>
          <a
            href=""
            className="inline-block py-3 px-7 bg-brand text-white text-base font-popins font-semibold hover:text-primary transition-all"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex ">
        <div className="bg-services2 bg-cover bg-no-repeat py-20 pl-10 w-full relative z-10">
          <div
            className="absolute top-0 left-0
          bg-[#0000004d] w-full h-full -z-10"
          ></div>
          <h3 className="text-white text-4xl font-popins font-bold pb-5 w-full lg:w[545px]">
            Supply of national industries.
          </h3>
          <a
            href=""
            className="inline-block py-3 px-7 bg-brand text-white text-base font-popins font-semibold hover:text-primary transition-all"
          >
            Learn More
          </a>
        </div>
        <div className="bg-services3 bg-cover bg-no-repeat py-20 pl-10 w-full relative z-10">
          <div
            className="absolute top-0 left-0
          bg-[#0000004d] w-full h-full -z-10"
          ></div>
          <h3 className="text-white text-4xl font-popins font-bold pb-5 w-full lg:w[698px]">
            National fuel distribution and supply.
          </h3>
          <a
            href=""
            className="inline-block py-3 px-7 bg-brand text-white text-base font-popins font-semibold hover:text-primary transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};
