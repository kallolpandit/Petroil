import React from "react";

export const Navbar = () => {
  return (
    <nav className="py-6 bg-brand">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <img src="images/logo.png" alt="" />
          </div>
          <div>
            <div>
              <ul className="flex gap-12">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Gallery</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <a href="">CONTACT</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
