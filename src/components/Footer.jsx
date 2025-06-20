import svgBackground from "../assets/images/backgroundSvg";
import footerDivider from "../assets/images/footer-divider.avif";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Decorative divider image above the footer */}
      <img className="mt-6 text-white" src={footerDivider} alt="" />

      {/* Main footer section with background SVG */}
      <footer
        style={{ backgroundImage: svgBackground }}
        className="bg-[#23022E] px-5 py-10"
      >
        {/* Newsletter subscription form */}
        <div className="p-8">
          <h2 className="mb-12 font-[poppins] text-lg font-bold text-white">
            Subscribe to Our Newsletter
          </h2>
          <form className="space-y-4">
            {/* Email input field */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-[poppins] text-white"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full rounded-full border-4 border-white bg-transparent p-4 font-[Playwrite_HU] text-[1.5rem] font-bold text-white placeholder-white hover:border-[#F8CE35]"
              />
            </div>
            {/* Checkbox and submit button */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <input
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  className="mr-2 h-6 w-6 cursor-pointer appearance-none border-2 border-white bg-transparent text-white checked:bg-[#F8CE35] hover:border-[#F8CE35]"
                />
                <label
                  htmlFor="subscribe"
                  className="font-indie-flower font-[Playwrite_HU] text-[1.5rem] font-bold text-white"
                >
                  Yes, subscribe me to your newsletter. *
                </label>
              </div>

              {/* Submit button for the form */}
              <button
                type="submit"
                className="w-[22rem] cursor-pointer rounded-full bg-[#F8CE35] px-8 py-4 font-[Playwrite_HU] text-[1.5rem] font-bold text-[#23022E] hover:bg-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Footer navigation and contact info */}
        <div className="container mx-auto flex flex-col justify-between p-8 font-bold text-white md:flex-row">
          {/* Brand and main navigation links */}
          <div className="mb-6 md:mb-0">
            <Link
              to="/#home"
              className="mb-4 font-[playwrite_HU] text-2xl font-bold text-yellow-400"
            >
              Zigh
            </Link>
            <ul>
              <li className="mt-4 mb-2">
                {/* Internal link to Shop page */}
                <Link to="/shop#all" className="hover:underline">
                  Shop
                </Link>
              </li>
              {/* Placeholder links for other sections */}
              <li className="mb-2">
                <Link to="/shop#subscription" className="hover:underline">
                  Subscription
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about#heading" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about#find-us" className="hover:underline">
                  Find Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about#faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          {/* Policy and legal links */}
          <div className="mt-12 mb-6 md:mb-0">
            <ul>
              <li className="mb-2">
                <Link to="/terms&condition" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/refund-policy" className="hover:underline">
                  Refund Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/shipping-policy" className="hover:underline">
                  Shipping Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/accessibility-statement" className="hover:underline">
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact information */}
          <div className="mt-12 mb-6 md:mb-0">
            <p className="mb-2">info@mysite.com</p>
            <p className="mb-2">123-456-7890</p>
            <p className="mb-2">500 Terry Francine Street</p>
            <p className="mb-2">San Francisco, CA 94158</p>
          </div>

          {/* Social media icons */}
          <div className="mt-12 mr-12 block space-x-4">
            <a
              href="#"
              className="text-[#23022e] transition-transform duration-200 hover:scale-110 hover:text-[#F8CE35]"
            >
              <i className="fab fa-youtube rounded-4xl bg-white p-3"></i>
            </a>
            <a
              href="#"
              className="text-[#23022e] transition-transform duration-200 hover:scale-110 hover:text-[#F8CE35]"
            >
              <i className="fab fa-instagram rounded-4xl bg-white p-3"></i>
            </a>
            <a
              href="#"
              className="text-[#23022e] transition-transform duration-200 hover:scale-110 hover:text-[#F8CE35]"
            >
              <i className="fab fa-snapchat rounded-4xl bg-white p-3"></i>
            </a>
          </div>
        </div>
        {/* Copyright notice */}
        <h1 className="mb-0 pl-8 font-[poppins] font-bold text-white">
          © 2025 by Zigh.com
        </h1>
      </footer>
    </>
  );
};

export default Footer;
