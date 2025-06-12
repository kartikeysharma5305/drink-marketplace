import { useEffect, useRef } from "react";
import InfiniteSlider from "./InfiniteSlider";
import blueberryImg from "../assets/images/blueberryImg.png";
import grapesImg from "../assets/images/grapes-image.png";
import rasberryImg from "../assets/images/raspberry-image.png";
import watermelonImg from "../assets/images/watermelon-image.png";
import ReusableButton from "./ReusableButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomeSection5 = () => {
  // Reference to the container div holding the images
  const imagesRef = useRef(null);
  // Array of refs for each image to animate them individually
  const imgRefs = useRef([]);

  // Animate images on scroll using GSAP
  useEffect(() => {
    // Ensure images exist before animating
    if (imgRefs.current.length > 0) {
      imgRefs.current.forEach((img) => {
        gsap.to(img, {
          rotation: 360, // 1 full spin clockwise when scrolling down
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top 80%", // Start when image top hits 80% of viewport
            end: "bottom 20%", // End when image bottom hits 20% of viewport
            scrub: 1, // Smoothly tie animation to scroll position
            toggleActions: "play none none reverse", // Reverse to -360 (counterclockwise) on scroll up
          },
        });
      });
    }

    // Cleanup ScrollTriggers and animations on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(imgRefs.current);
    };
  }, []);
  return (
    <>
      {/* Section title slider */}
      <InfiniteSlider sliderText={"About Us"} />

      {/* Fruit images grid with animation refs */}
      <div
        ref={imagesRef}
        className="grid grid-cols-4 grid-rows-1 items-center justify-center"
      >
        <img
          ref={(el) => (imgRefs.current[0] = el)}
          className="mt-14 w-[13rem]"
          src={blueberryImg}
          alt="Blueberry illustration for About Us section"
        />
        <img
          ref={(el) => (imgRefs.current[1] = el)}
          className="z-0 mb-50 w-[13rem]"
          src={grapesImg}
          alt="Grapes illustration for About Us section"
        />
        <img
          ref={(el) => (imgRefs.current[2] = el)}
          className="z-0 mb-30 w-[10rem]"
          src={rasberryImg}
          alt="Raspberry illustration for About Us section"
        />
        <img
          ref={(el) => (imgRefs.current[3] = el)}
          className="z-0 w-[15rem]"
          src={watermelonImg}
          alt="Watermelon slice illustration for About Us section"
        />
      </div>

      {/* About section text and button */}
      <div className="flex flex-col items-center justify-center text-[#23022E]">
        {/* Section heading */}
        <h1 className="mt-[-10rem] mb-6 font-[poppins] text-[1.15rem] font-bold">
          About
        </h1>

        {/* Section subheading */}
        <p className="mb-10 font-[Playwrite_HU] text-3xl font-bold">
          How We Got Our Flavors
        </p>

        {/* Section description */}
        <p className="mb-6 w-[40rem] text-center font-[poppins]">
          Let the writing speak for itself. Keep a consistent tone and voice
          throughout the website to stay true to the brand image and give
          visitors a taste of the company’s values and personality.
        </p>

        {/* Call-to-action button */}
        <Link to={"/about#heading"}>
          <ReusableButton
            text={"See Yourself"}
            styles={
              "bg-[#D71919] mb-10 text-[#23022E] hover:bg-white hover:shadow-[#D71919] hover:text-[#D71919]"
            }
            buttonSize={1}
            iconColor={"white"}
          />
        </Link>
      </div>
    </>
  );
};

export default HomeSection5;
