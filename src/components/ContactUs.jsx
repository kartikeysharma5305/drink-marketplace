import React from "react";
import upwardDivider from "../assets/images/contact-us-up-divider.png";
import downwardDivider from "../assets/images/contact-us-down-divider.png";
import InfiniteSlider from "./InfiniteSlider";

const ContactUs = () => {
  return (
    <div className="bg-[#F8CE35]">
      <img src={upwardDivider} alt="" />

      <InfiniteSlider sliderText={"Contact Us"} />

      <div>
        <h1 className="mt-10 p-4 text-center font-[Playwrite_HU] font-bold">
          Get in Touch
        </h1>
        <p className="text-center font-[poppins]">
          Do you have any question request or comment? We’d love to hear from{" "}
          <br />
          you! Fill out the form, and we will get right back to you.
        </p>
      </div>

      <form className="w-full p-8 lg:p-20">
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              className="mb-2 block font-[poppins] text-xs font-bold tracking-wide text-[#23022E] uppercase"
              htmlFor="first-name"
            >
              First name
            </label>
            <input
              className="block w-full appearance-none rounded-full border-2 border-[#23022E] bg-[#F8CE35] px-4 py-4 font-[Playwrite_HU] leading-tight text-[#23022E] focus:bg-white focus:outline-none"
              id="first-name"
              type="text"
              placeholder=""
            />
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label
              className="mb-2 block font-[poppins] text-xs font-bold tracking-wide text-[#23022E] uppercase"
              htmlFor="last-name"
            >
              Last name
            </label>
            <input
              className="block w-full appearance-none rounded-full border-2 border-[#23022E] bg-[#F8CE35] px-4 py-4 font-[Playwrite_HU] leading-tight text-[#23022E] focus:bg-white focus:outline-none"
              id="last-name"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block font-[poppins] text-xs font-bold tracking-wide text-[#23022E] uppercase"
            htmlFor="email"
          >
            Email *
          </label>
          <input
            className="block w-full appearance-none rounded-full border-2 border-[#23022E] bg-[#F8CE35] px-4 py-4 font-[Playwrite_HU] leading-tight text-[#23022E] focus:bg-white focus:outline-none"
            id="email"
            type="email"
            placeholder=""
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block font-[poppins] text-xs font-bold tracking-wide text-[#23022E] uppercase"
            htmlFor="message"
          >
            Message *
          </label>
          <textarea
            className="block w-full appearance-none rounded-lg border-2 border-[#23022E] bg-[#F8CE35] px-4 py-4 font-[Playwrite_HU] leading-tight text-[#23022E] focus:bg-white focus:outline-none"
            id="message"
            rows={4}
            placeholder=""
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="focus:shadow-outline cursor-pointer rounded-full bg-[#23022E] px-20 py-3 font-[Playwrite_HU] font-bold text-white focus:outline-none"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>

      <img src={downwardDivider} alt="" />
    </div>
  );
};

export default ContactUs;
