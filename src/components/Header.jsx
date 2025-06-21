import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  // Get the total quantity of items in the cart from Redux store
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Sticky header container */}
      <div className="sticky top-0 z-50 flex justify-center">
        <div className="mx-5 mt-5 flex w-[90%] items-center justify-between rounded-full border-2 border-[#FFD700] bg-white px-5 py-4.5">
          {/* Logo linking to homepage */}
          <Link
            to={"/#home"}
            className="text-1rem font-['Playwrite_HU'] font-bold text-[#23022E]"
          >
            Zigh
          </Link>

          {/* Navigation links section (hidden on mobile) */}
          <div className="ml-26 hidden gap-5 md:flex">
            <Link
              to="/shop#all"
              className="text-1rem font-['Playwrite_HU'] font-bold text-[#23022E] no-underline hover:text-sky-700"
            >
              Shop
            </Link>
            <Link
              to="/shop#pack"
              className="text-1rem font-['Playwrite_HU'] font-bold text-[#23022E] no-underline hover:text-sky-700"
            >
              Packs
            </Link>
            <Link
              to="/about#heading"
              className="text-1rem font-['Playwrite_HU'] font-bold text-[#23022E] no-underline hover:text-sky-700"
            >
              About
            </Link>
            <Link
              to="/about#find-us"
              className="text-1rem font-['Playwrite_HU'] font-bold text-[#23022E] no-underline hover:text-sky-700"
            >
              Find Us
            </Link>
          </div>

          {/* Login and Cart section */}
          <div className="flex items-center gap-2.5">
            {/* Login page link */}
            <Link
              to="/login"
              className="font-['Playwrite_HU'] text-lg font-bold text-[#23022E] no-underline hover:text-sky-700"
            >
              Log In
            </Link>

            {/* Cart icon with total quantity, links to cart page */}
            <Link to={"/cart#head"}>
              <div className="flex items-center justify-center rounded-full bg-[#1E90FF] p-2.5 font-bold text-white">
                <i className="fas fa-shopping-cart pr-2"></i>
                {totalQuantity}
              </div>
            </Link>

            {/* Hamburger menu for mobile */}
            <button
              className="ml-auto flex flex-col items-center justify-center rounded-2xl bg-[#23022E] p-2.5 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Open menu"
            >
              <span className="mb-1 block h-1 w-8 rounded bg-white"></span>
              <span className="mb-1 block h-1 w-8 rounded bg-white"></span>
              <span className="block h-1 w-8 rounded bg-white"></span>
            </button>
          </div>
        </div>
        {/* Mobile menu overlay */}
        <div
          className={`bg-opacity-40 fixed inset-0 z-50 flex flex-col items-end opacity-100 backdrop-blur-md transition-opacity duration-300 ease-in-out md:hidden ${
            menuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          style={{ visibility: menuOpen ? "visible" : "hidden" }}
        >
          <div
            className={`flex h-full w-2/3 flex-col bg-white p-8 font-bold shadow-lg transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="mb-8 self-end text-3xl text-[#23022E]"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            {/* Enabled nav links in mobile menu */}
            <Link
              to="/shop#all"
              className="mb-4 font-['Playwrite_HU'] text-xl font-bold text-[#23022E] no-underline hover:text-sky-700"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/shop#pack"
              className="mb-4 font-['Playwrite_HU'] text-xl font-bold text-[#23022E] no-underline hover:text-sky-700"
              onClick={() => setMenuOpen(false)}
            >
              Packs
            </Link>
            <Link
              to="/about#heading"
              className="mb-4 font-['Playwrite_HU'] text-xl font-bold text-[#23022E] no-underline hover:text-sky-700"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/about#find-us"
              className="mb-4 font-['Playwrite_HU'] text-xl font-bold text-[#23022E] no-underline hover:text-sky-700"
              onClick={() => setMenuOpen(false)}
            >
              Find Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
