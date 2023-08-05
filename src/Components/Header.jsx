import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="py-4 bg-[#282828]">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex gap-7">
            <div className="text-white font-popins text-sm">
              <a
                href="mailto:mail@yourcompany.com"
                className="flex gap-2 items-center hover:text-brand transition-all"
              >
                <MdMarkEmailUnread /> mail@yourcompany.com
              </a>
            </div>
            <div className="text-white font-popins text-sm">
              <a
                href="tel:+896 120 5889 (Toll free)"
                className="flex gap-2 items-center hover:text-brand transition-all"
              >
                <FiPhoneCall />
                +896 120 5889 <span>(Toll free)</span>
              </a>
            </div>
          </div>
          <div>
            <ul className="text-white flex gap-4">
              <li className="hover:text-brand transition-all cursor-pointer">
                <FaFacebookF />{" "}
              </li>
              <li className="hover:text-brand transition-all cursor-pointer">
                <FaTwitter />{" "}
              </li>
              <li className="hover:text-brand transition-all cursor-pointer">
                <FaLinkedinIn />{" "}
              </li>
              <li className="hover:text-brand transition-all cursor-pointer">
                <FaInstagram />{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
