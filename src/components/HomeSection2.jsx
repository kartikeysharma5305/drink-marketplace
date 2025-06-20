import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import can1 from "../assets/images/can1.avif";
import ReusableButton from "./ReusableButton";
import { Link } from "react-router-dom";

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomeSection2 = () => {
  // Refs to hold section and image DOM nodes for animation
  const sectionRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    // Animate each section: slide in from left or right with fade-in
    sectionRefs.current.forEach((section, index) => {
      const isEven = index % 2 === 0;
      gsap.fromTo(
        section,
        {
          x: isEven ? "70%" : "-120%", // Start off-screen (right for even, left for odd)
          opacity: 0,
        },
        {
          x: "0%", // End at original position
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Animation starts when section enters viewport
            end: "bottom 20%",
            scrub: 0.5, // Smooth animation tied to scroll
            toggleActions: "play reverse play reverse", // Play on enter, reverse on leave
          },
        },
      );
    });

    // Animate each image: spin as user scrolls
    imageRefs.current.forEach((image) => {
      gsap.to(image, {
        rotation: 360, // Full rotation
        scrollTrigger: {
          trigger: image.parentElement, // Use parent section as trigger
          start: "top 60%",
          end: "bottom 40%",
          scrub: 0.5, // Smoothly tie rotation to scroll
          onUpdate: (self) => {
            // Dynamically adjust rotation based on scroll direction and progress
            const progress = self.progress; // 0 to 1
            const direction = self.direction === 1 ? 1 : -1; // 1 for down, -1 for up
            const rotation = direction * progress * 360;
            gsap.set(image, { rotation });
          },
        },
      });
    });

    // Cleanup: kill all ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Helper to add section refs (avoids duplicates)
  const addToSectionRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  // Helper to add image refs (avoids duplicates)
  const addToImageRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  // Renders a section with animated content (text and/or image)
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
      {/* Header section */}
      <div className="pt-8 pb-8 text-center font-[poppins] text-[#23022E]">
        <h1 className="mb-3 font-bold">Now On Sale</h1>
        <p className="text-lg md:text-xl">Organic Ingredients, Real Bhang</p>
      </div>

      {/* Animated sections with images and text */}
      <div className="space-y-8 py-8 md:space-y-16">
        {/* Section: Image + "Real Bhang" */}
        {renderSection([
          <img
            ref={addToImageRefs}
            key="image1"
            className="mr-4 w-[10rem]"
            src={can1}
            alt="Hero Can"
          />,
          "Real Bhang",
        ])}

        {/* Shop Sale button */}
        <Link to={"/shop#sale"}>
          <ReusableButton
            text={"Sale On"}
            iconColor={"white"}
            styles={
              "mr-12 mt-12 text-[#23022E] bg-[#F8CE35] hover:bg-white hover:shadow-[#F8CE35] hover:text-[#23022E] "
            }
            buttonSize={3}
          />
        </Link>

        {/* Section: "Organic" + Image */}
        {renderSection(
          [
            "Organic",
            <img
              ref={addToImageRefs}
              key="image2"
              className="w-[10rem]"
              src={can1}
              alt="Hero Can"
            />,
          ],
          true,
        )}

        {/* Section: Image + "Ingredients" */}
        {renderSection([
          <img
            ref={addToImageRefs}
            key="image3"
            className="mr-4 w-[10rem]"
            src={can1}
            alt="Hero Can"
          />,
          "Natural",
        ])}
      </div>
    </div>
  );
};

export default HomeSection2;
