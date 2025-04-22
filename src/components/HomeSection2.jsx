import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroCan from "../assets/images/hero-section-can.avif";
import ReusableButton from "./ReusableButton";
import { Link } from "react-router-dom";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomeSection2 = () => {
  const sectionRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    // Animate sections (slide in/out)
    sectionRefs.current.forEach((section, index) => {
      const isEven = index % 2 === 0;
      gsap.fromTo(
        section,
        {
          x: isEven ? "70%" : "-120%", // Start off-screen (right or left)
          opacity: 0,
        },
        {
          x: "0%", // End at natural position
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Start when top of section hits 80% of viewport
            end: "bottom 20%", // End when bottom hits 20% of viewport
            scrub: 0.5, // Smoothly tie animation to scroll (0.5s lag)
            toggleActions: "play reverse play reverse", // Play on enter, reverse on leave
          },
        },
      );
    });

    // Animate images (spin)
    imageRefs.current.forEach((image) => {
      gsap.to(image, {
        rotation: 360, // Default full rotation
        scrollTrigger: {
          trigger: image.parentElement, // Use parent section as trigger
          start: "top 60%",
          end: "bottom 40%",
          scrub: 0.5, // Smoothly tie rotation to scroll
          onUpdate: (self) => {
            // Adjust rotation direction based on scroll direction
            const progress = self.progress; // 0 to 1
            const direction = self.direction === 1 ? 1 : -1; // 1 for down, -1 for up
            const rotation = direction * progress * 360; // Clockwise or counterclockwise
            gsap.set(image, { rotation });
          },
        },
      });
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToSectionRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const addToImageRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  const renderSection = (content, isButton = false) => (
    <div
      ref={addToSectionRefs}
      className="flex items-center justify-center opacity-0"
    >
      {content.map((item, index) =>
        typeof item === "string" ? (
          <h1
            key={index}
            className="font-[Playwrite_HU] text-5xl font-bold text-[#23022E] md:text-[7rem]"
          >
            {item}
          </h1>
        ) : (
          <React.Fragment key={index}>{item}</React.Fragment>
        ),
      )}
    </div>
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#3284E2]">
      <div className="pt-8 pb-8 text-center font-[poppins] text-[#23022E]">
        <h1 className="mb-3 font-bold">Now On Sale</h1>
        <p className="text-lg md:text-xl">Organic Ingredients, Real Bhang</p>
      </div>

      <div className="space-y-8 py-8 md:space-y-16">
        {renderSection([
          <img
            ref={addToImageRefs}
            key="image1"
            className="mr-4 w-[6rem]"
            src={heroCan}
            alt="Hero Can"
          />,
          "Real Bhang",
        ])}

        <Link to={"/shop"}>
          <ReusableButton
            text={"Shop Sale"}
            iconColor={"white"}
            styles={
              "mr-12 mt-12 text-[#23022E] bg-[#F8CE35] hover:bg-white hover:shadow-[#F8CE35] hover:text-[#23022E] "
            }
            buttonSize={3}
          />
        </Link>

        {renderSection(
          [
            "Organic",
            <img
              ref={addToImageRefs}
              key="image2"
              className="w-[6rem]"
              src={heroCan}
              alt="Hero Can"
            />,
          ],
          true,
        )}
        {renderSection([
          <img
            ref={addToImageRefs}
            key="image3"
            className="mr-4 w-[6rem]"
            src={heroCan}
            alt="Hero Can"
          />,
          "Ingredients",
        ])}
      </div>
    </div>
  );
};

export default HomeSection2;
