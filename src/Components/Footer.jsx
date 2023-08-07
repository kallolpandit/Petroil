import React from "react";
import { IoMdMailUnread } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

export const Footer = () => {
  return (
    <footer className="pt-28 bg-[#1F1F1F]">
      <div className="container">
        <div className="pb-28">
          <div>
            <div>
              <img src="images/footer-logo.png" alt="footer-logo" />
            </div>
            <div className="pt-8">
              <ul className="flex flex-col gap-4 w-fit">
                <li>
                  <a
                    href="mailto:mail@yourcompany.com"
                    className="flex gap-2 items-center text-white text-base font-popins font-normal hover:text-brand transition-all"
                  >
                    {" "}
                    <IoMdMailUnread /> mail@yourcompany.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+896 120 5889"
                    className="flex gap-2 items-center text-white text-base font-popins font-normal hover:text-brand transition-all"
                  >
                    {" "}
                    <FiPhoneCall /> +896 120 5889 <span>(Toll free)</span>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex gap-2 items-center text-white text-base font-popins font-normal hover:text-brand transition-all"
                  >
                    {" "}
                    <SlLocationPin /> 101 Baker Street, New York, USA, 12345
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
