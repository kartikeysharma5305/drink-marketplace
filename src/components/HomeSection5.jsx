import InfiniteSlider from "./InfiniteSlider";
import blueberryImg from "../assets/images/blueberryImg.png";
import grapesImg from "../assets/images/grapes-image.png";
import rasberryImg from "../assets/images/raspberry-image.png";
import watermelonImg from "../assets/images/watermelon-image.png";
import ReusableButton from "./ReusableButton";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HomeSection5 = () => {
  const imagesRef = useRef(null);
  const imgRefs = useRef([]);

  useEffect(() => {
    imgRefs.current.forEach((img, i) => {
      gsap.fromTo(
        img,
        { opacity: 0, y: 60, rotate: 0 },
        {
          opacity: 1,
          y: 0,
          rotate: 360,
          duration: 1,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, []);

  return (
    <>
      <InfiniteSlider sliderText={"About Us"} />

      <div
        ref={imagesRef}
        className="grid grid-cols-4 grid-rows-1 items-center justify-center"
      >
        <img
          ref={(el) => (imgRefs.current[0] = el)}
          className="mt-14 w-[13rem]"
          src={blueberryImg}
          alt="blueberry"
        />
        <img
          ref={(el) => (imgRefs.current[1] = el)}
          className="z-0 mb-50 w-[13rem]"
          src={grapesImg}
          alt="grapes"
        />
        <img
          ref={(el) => (imgRefs.current[2] = el)}
          className="z-0 mb-30 w-[10rem]"
          src={rasberryImg}
          alt="rasberry"
        />
        <img
          ref={(el) => (imgRefs.current[3] = el)}
          className="z-0 w-[15rem]"
          src={watermelonImg}
          alt="piece of water melon"
        />
      </div>

      <div className="flex flex-col items-center justify-center text-[#23022E]">
        <h1 className="mt-[-10rem] mb-6 font-[poppins] text-[1.15rem] font-bold">
          About
        </h1>

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
            "bg-[#D71919] mb-10 text-[#23022E] hover:bg-white hover:shadow-[#D71919] hover:text-[#D71919]"
          }
          buttonSize={1}
          iconColor={"white"}
        />
      </div>
    </>
  );
};

export default HomeSection5;
