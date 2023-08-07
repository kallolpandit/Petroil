import React from "react";
import { BiSolidChevronRight } from "react-icons/bi";

export const Blog = () => {
  return (
    <section className="pt-28 pb-24 bg-slate-100">
      <div className="container">
        <div className="flex justify-between gap-14">
          <div className="bg-blog1 bg-no-repeat bg-cover w-1/3 relative z-10">
            <div className="absolute top-0 left-0 bg-[#0000008d] w-full h-full -z-10"></div>
            <div className="pl-20">
              <h3 className="text-white text-2xl font-popins font-bold pt-20 leading-normal w-full lg:w-64">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h3>
              <div className="py-14">
                <a
                  href=""
                  className="text-white text-sm font-popins font-semibold py-3 px-7 bg-[#ffffff50] inline-block hover:text-brand transition-all"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="bg-blog2 bg-no-repeat bg-cover w-1/3 relative z-10">
            <div className="absolute top-0 left-0 bg-[#0000008d] w-full h-full -z-10"></div>
            <div className="pl-20">
              <h3 className="text-white text-2xl font-popins font-bold pt-20 leading-normal w-full lg:w-64">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h3>
              <div className="py-14">
                <a
                  href=""
                  className="text-white text-sm font-popins font-semibold py-3 px-7 bg-[#ffffff50] inline-block hover:text-brand transition-all"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="bg-blog3 bg-no-repeat bg-cover w-1/3 relative z-10">
            <div className="absolute top-0 left-0 bg-[#0000008d] w-full h-full -z-10"></div>
            <div className="pl-20">
              <h3 className="text-white text-2xl font-popins font-bold pt-20 leading-normal w-full lg:w-64">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h3>
              <div className="py-14">
                <a
                  href=""
                  className="text-white text-sm font-popins font-semibold py-3 px-7 bg-[#ffffff50] inline-block hover:text-brand transition-all"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit ml-auto pt-7">
          <a
            href=""
            className="flex items-center gap-2 text-primary text-base font-popins font-bold  hover:text-brand transition-all"
          >
            MORE FROM THE BLLOG <BiSolidChevronRight />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};
