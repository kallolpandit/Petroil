import React from "react";

export const Navbar = () => {
  return (
    <nav className="py-6 bg-brand">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <img src="images/logo.png" alt="" />
          </div>
          <div className="flex gap-16">
            <div>
              <ul className="flex gap-12 text-base text-white font-popins font-semibold">
                <li>
                  <a
                    href=""
                    className="hover:border-b hover:border-b-white transition-all"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:border-b hover:border-b-white transition-all"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:border-b hover:border-b-white transition-all"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:border-b hover:border-b-white transition-all"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:border-b hover:border-b-white transition-all"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-white text-base font-popins font-semibold">
              <a
                href=""
                className=" border border-white py-3 px-8 hover:bg-white hover:text-brand transition-all"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
