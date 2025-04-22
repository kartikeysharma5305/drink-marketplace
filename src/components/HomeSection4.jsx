import React from "react";
import ReusableButton from "./ReusableButton";
import divider from "../assets/images/footer-divider.png";

const HomeSection4 = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#23022E] pt-10">
        <h1 className="pb-2 font-[poppins] font-bold text-white">
          Our Best Selling Drinks
        </h1>
        <p className="p-12 font-[Playwrite_HU] text-3xl font-bold text-white">
          You'll Love These Flavours
        </p>

        <div className="pb-10">
          <ReusableButton
            text="Explore All"
            styles="text-white  bg-[#0869D9] hover:bg-[white] hover:border-[#0869D9] hover:shadow-[#0869D9] hover:text-[#0869D9]"
            iconColor="white"
            buttonSize={2}
          />
        </div>
      </div>
      <img className="rotate-180 text-white" src={divider} alt="" />
    </>
  );
};

export default HomeSection4;
