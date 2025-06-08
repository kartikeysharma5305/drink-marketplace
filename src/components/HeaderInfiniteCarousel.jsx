import React, { useEffect, useRef } from "react";

//  Currently, it shows a single message, but can be extended to multiple items.

const InfiniteCarousel = () => {
  const items = [
    {
      content: "Free Shipping on All Orders Over ₹799",
    },
  ];

  // Duplicate items multiple times for seamless infinite scrolling effect
  const carouselItems = [
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
  ].map((item, index) => ({
    ...item,
    id: index + 1, // Assign a unique id to each duplicated item
  }));

  // Ref to access the carousel DOM element
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Reset scroll position to the start on component mount
    carousel.scrollLeft = 0;

    // Optional: Pause animation when mouse hovers over the carousel
    const handleMouseEnter = () =>
      (carousel.style.animationPlayState = "paused");
    const handleMouseLeave = () =>
      (carousel.style.animationPlayState = "running");

    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners on component unmount
    return () => {
      carousel.removeEventListener("mouseenter", handleMouseEnter);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    // Outer container to hide overflow and keep carousel within bounds
    <div className="w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="animate-infinite-slide flex"
        style={{
          animationDuration: "10s", // Duration of the infinite scroll animation
          width: `${items.length * 25}%`, // Width based on number of items
        }}
      >
        {/* Render each carousel item */}
        {carouselItems.map((item) => (
          <div
            key={item.id}
            className="font-poppins flex flex-shrink-0 items-center justify-center gap-4 bg-[#23022E] font-normal text-white"
          >
            {/* Icon displayed before the content */}
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="rgb(248, 206, 53)"
              >
                <path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z" />
              </svg>
            </p>

            {/* Carousel item content */}
            <p className="font-semi- p-2">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
