import React from "react";
import Iframe from "react-iframe";

export const Map = () => {
  return (
    <section>
      <div>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547228.7005402782!2d-74.35939986328371!3d40.739144486438065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1691422979033!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></Iframe>
      </div>
      <div className="bg-brand py-11">
        <div className="container">
          <div className="flex justify-between items-center">
            <h2 className="text-white text-4xl font-popins font-bold w-full lg:w-[950px]">
              Want to join as member branch in your area?
            </h2>
            <a
              href=""
              className="text-white text-base font-popins font-semibold py-3 px-7 border border-white inline-block hover:bg-white hover:text-brand transition-all"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
