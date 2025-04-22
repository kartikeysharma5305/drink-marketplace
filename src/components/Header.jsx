import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      <div className="sticky top-0 z-50 flex justify-center">
        <div className="mx-5 mt-5 flex w-[90%] items-center justify-between rounded-full border-2 border-[#FFD700] bg-white px-5 py-4.5">
          {/* Logo */}
          <Link
            to={"/"}
            className="text-1rem font-['Playwrite_HU'] font-bold text-[#23022E]"
          >
            Zigh
          </Link>

          {/* Navigation Links */}
          <div className="ml-26 flex gap-5">
            <Link
              to="/shop"
              className="text-1rem font-['Playwrite_HU'] font-bold text-[#23022E] no-underline hover:text-sky-700"
            >
              Shop
            </Link>
            <a
              href="#"
              className="text-1rem font-['Playwrite_HU'] font-bold text-[#23022E] no-underline hover:text-sky-700"
            >
              Subscription
            </a>
            <Link
              to="/about"
              className="text-1rem font-['Playwrite_HU'] font-bold text-[#23022E] no-underline hover:text-sky-700"
            >
              About
            </Link>
            <a
              href="#"
              className="text-1rem font-['Playwrite_HU'] font-bold text-[#23022E] no-underline hover:text-sky-700"
            >
              Find Us
            </a>
          </div>

          {/* Login and Cart */}
          <div className="flex items-center gap-2.5">
            <Link
              to="/login"
              className="font-['Playwrite_HU'] text-lg font-bold text-[#23022E] no-underline hover:text-sky-700"
            >
              Log In
            </Link>
            <Link to={"/cart"}>
              <div className="flex items-center justify-center rounded-full bg-[#1E90FF] p-2.5 font-bold text-white">
                <i className="fas fa-shopping-cart pr-2"></i>
                {totalQuantity}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
