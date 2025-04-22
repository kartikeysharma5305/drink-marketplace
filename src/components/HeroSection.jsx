import React from "react";
import splitHeroSection from "../assets/images/split-hero.svg";
import InteractiveSodaCan from "./InteractiveSodaCan";
import ReusableButton from "./ReusableButton";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="bg-[#F8CE35]">
        <h2 className="p-[2rem_2.5rem_3rem_0rem] text-center font-[poppins] font-extrabold">
          Craft Soft Sparkling Made with Joy and BHANG.
        </h2>
        <div className="mb-[-3rem] flex items-center justify-center">
          <InteractiveSodaCan />

          <h1 className="z-1 ml-[2rem] font-[Playwrite_HU] text-[7rem] font-extrabold text-[#23022E]">
            Lets Get <br /> High AF
          </h1>
        </div>

        <Link to={"/shop"}>
          <ReusableButton
            text={"Explore Flavour"}
            styles={
              "bg-red-600 mr-[10rem] hover:bg-white hover:text-red-600 hover:border-[shadow-red-600] hover:shadow-red-600"
            }
            iconColor={"#ffffff"}
            buttonSize={4}
          />
        </Link>

        <img className="w-full" src={splitHeroSection} alt="" />
      </div>
    </>
  );
};

export default HeroSection;
