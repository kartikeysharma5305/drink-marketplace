import React from "react";
import InfiniteSlider from "./InfiniteSlider";
import blueberryImg from "../assets/images/blueberryImg.png";
import grapesImg from "../assets/images/grapes-image.png";
import rasberryImg from "../assets/images/raspberry-image.png";
import ReusableButton from "./ReusableButton";

const HomeSection5 = () => {
  return (
    <>
      <InfiniteSlider sliderText={"About Us"} />

      <div className="grid grid-cols-3 grid-rows-1 items-center justify-center">
        <img className="mt-14 w-[13rem]" src={blueberryImg} alt="blueberry" />
        <img className="z-0 mb-50 w-[13rem]" src={grapesImg} alt="grapes" />

        <img className="z-0 mb-30 w-[10rem]" src={rasberryImg} alt="rasberry" />
      </div>

      <div className="flex flex-col items-center justify-center text-[#23022E]">
        <h1 className="mb-6 font-[poppins] text-[1.15rem] font-bold">About</h1>

        <p className="mb-10 font-[Playwrite_HU] text-3xl font-bold">
          How We Got Our Flavors
        </p>

        <p className="mb-6 w-[40rem] text-center font-[poppins]">
          Let the writing speak for itself. Keep a consistent tone and voice
          throughout the website to stay true to the brand image and give
          visitors a taste of the company’s values and personality.
        </p>

        <ReusableButton
          text={"See Yourself"}
          styles={
            "bg-[#D71919] text-[#23022E] hover:bg-white hover:shadow-[#D71919] hover:text-[#D71919]"
          }
          buttonSize={1}
          iconColor={"white"}
        />
      </div>
    </>
  );
};

export default HomeSection5;
