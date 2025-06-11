import splitHeroSection from "../assets/images/split-hero.svg";
import InteractiveSodaCan from "./InteractiveSodaCan";
import ReusableButton from "./ReusableButton";
import { Link } from "react-router-dom";

// HeroSection component displays the main hero area of the landing page
const HeroSection = () => {
  return (
    <>
      {/* Main container with background color and negative top margin for overlap effect */}
      <div className="mt-[-7rem] bg-[#F8CE35]">
        <h2 className="p-[10rem_2.5rem_0rem_0rem] text-center font-[poppins] font-extrabold">
          Craft Soft Sparkling Made with Joy and BHANG.
        </h2>
        {/* Flex container for soda can and main title */}
        <div className="mb-[-3rem] flex items-center justify-center">
          {/* Interactive soda can animation/component */}
          <InteractiveSodaCan />

          {/* Main hero title */}
          <h1
            className="floating-hero-title z-1 ml-[2rem] font-[Playwrite_HU] text-[7rem] font-extrabold text-[#23022E]"
            style={{ position: "relative" }}
          >
            Lets Get <br /> High AF
          </h1>
        </div>

        {/* Button linking to the shop page */}
        <Link to={"/shop#all"}>
          <ReusableButton
            text={"Explore Flavour"}
            styles={
              "bg-red-600 mr-[10rem] hover:bg-white hover:text-red-600 hover:border-[shadow-red-600] hover:shadow-red-600"
            }
            iconColor={"#ffffff"}
            buttonSize={4}
          />
        </Link>

        {/* Decorative split image at the bottom of the hero section */}
        <img className="w-full" src={splitHeroSection} alt="" />
      </div>
    </>
  );
};

export default HeroSection;
