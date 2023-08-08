import React from "react";
import { IoMdMailUnread } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="pt-28 bg-[#1F1F1F]">
      <div className="container">
        <div className="pb-28 flex justify-between">
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
            <div className="pt-8">
              <ul className="flex gap-3">
                <li>
                  <a
                    href=""
                    className="py-2 px-2 rounded-full bg-brand text-white inline-block hover:bg-white hover:text-brand transition-all"
                  >
                    {" "}
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="py-2 px-2 rounded-full bg-brand text-white inline-block hover:bg-white hover:text-brand transition-all"
                  >
                    {" "}
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="py-2 px-2 rounded-full bg-brand text-white inline-block hover:bg-white hover:text-brand transition-all"
                  >
                    {" "}
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="py-2 px-2 rounded-full bg-brand text-white inline-block hover:bg-white hover:text-brand transition-all"
                  >
                    {" "}
                    <FiInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-popins font-bold ">
              Company
            </h3>
            <div className="pt-5">
              <ul className="flex flex-col gap-4 text-white text-base font-popins font-normal">
                <li>
                  <a href="" className="hover:text-brand transition-all">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-brand transition-all">
                    About
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-brand transition-all">
                    Services
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-brand transition-all">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-popins font-bold ">
              Others
            </h3>
            <div className="pt-5">
              <ul className="flex flex-col gap-4 text-white text-base font-popins font-normal">
                <li>
                  <a href="" className="hover:text-brand transition-all">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-brand transition-all">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-brand transition-all">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-brand transition-all">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-popins font-bold">
              Certificate
            </h3>
            <div className="flex gap-2 pt-5">
              <div>
                <img src="images/Cert1.png" alt="Cert1" />
              </div>
              <div>
                <img src="images/Cert2.png" alt="Cert2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 bg-[#282828]">
        <div className="container">
          <div>
            <p className="text-secondary text-base font-popins font-medium">
              © Copyright 2022 by AltDesain Studio – All right reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
