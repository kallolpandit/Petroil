import React from "react";

export const Supplier = () => {
  return (
    <section className="pt-20">
      <div className="container">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-primary text-5xl font-popins font-bold w-full lg:w-80 leading-tight">
              The biggest supplier on the country
            </h2>
            <p className="text-secondary text-lg font-popins font-normal w-full lg:w-[650px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-8 pt-24">
        <div>
          <img src="images/supplier-1.png" alt="" />
        </div>
        <div>
          <img src="images/supplier-2.png" alt="" />
        </div>
        <div>
          <img src="images/supplier-3.png" alt="" />
        </div>
        <div>
          <img src="images/supplier-4.png" alt="" />
        </div>
      </div>
    </section>
  );
};
