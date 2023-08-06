import React from "react";

export const About = () => {
  return (
    <section className="py-28">
      <div className="container">
        <div className="flex">
          <div className="bg-brand w-1/3">
            <h2 className="text-white text-4xl font-popins font-bold w-full lg:w-72 py-24 pl-16 leading-normal">
              Learn more about our company
            </h2>
          </div>
          <div className="bg-about bg-no-repeat bg-cover w-2/3 relative">
            <div className="absolute top-2/4 left-1/2 ">
              <a
                href=""
                className="py-3 px-7 bg-white text-brand hover:bg-brand hover:text-white transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
