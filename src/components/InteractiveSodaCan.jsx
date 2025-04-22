import React, { useEffect, useRef } from "react";
import heroCan from "../assets/images/hero-section-can.avif";
import hempLeaf from "../assets/images/hemp-leaf.png";

const InteractiveSodaCan = () => {
  const canRef = useRef(null);
  const bgRef = useRef(null);
  const hempLeafRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;

      const moveX = (clientX - centerX) / centerX;
      const moveY = (clientY - centerY) / centerY;

      if (canRef.current) {
        canRef.current.style.transform = `translate(${moveX * 30}px, ${moveY * 30}px) `;
      }
      if (bgRef.current) {
        bgRef.current.style.transform = `translate(${moveX * 20}px, ${moveY * 20}px) `;
      }
      if (hempLeafRef.current) {
        hempLeafRef.current.style.transform = `translate(${moveX * 10}px, ${moveY * 10}px) `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="relative z-0 flex h-screen items-center justify-center"
        style={{ transform: "rotate(-10deg)" }}
      >
        {/* SVG Background */}
        <svg
          ref={bgRef}
          preserveAspectRatio="none"
          data-bbox="0 0 564.781 1160"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 564.781 1160"
          height="500" // Adjusted to match h-72 (72 * 4 = 288px, scaled up)
          width="250" // Adjusted to match w-40 (40 * 4 = 160px, scaled up)
          data-type="color"
          role="presentation"
          aria-hidden="true"
          aria-label=""
          className="absolute transition-transform duration-100"
        >
          <g>
            <path
              fill="#23022E"
              d="M274.526 0H50.719c-3.49 3.12-5.621 8.68-5.621 14.468 0 7.233.925 9.973 3.736 10.49 2.292.42 2.1 2.23 1.95 3.629-.033.316-.065.611-.065.865 0 8.504-1.906 20.151-10.338 36.685s-29.45 61.481-35.634 78.015c-5.473 14.634-4.824 41.819-4.603 51.1.03 1.205.05 2.109.05 2.643 0 2.209 1.269 194.366 2.6 396.154 1.472 223.083 3.022 457.941 3.022 460.921 0 8.42 10.34 16.87 16.919 22.24.733.6 1.42 1.16 2.04 1.68 6.184 5.17 35.006 30.19 39.503 35.87 2.686 3.4 4.235 7.57 5.646 11.37.951 2.57 1.84 4.96 2.971 6.83 2.811 4.65 20.04 13.03 47.585 17.16 2.961.45 5.851.91 8.799 1.38 23.334 3.74 50.376 8.07 145.809 8.47v.03c2.476 0 4.91 0 7.303-.01 2.393.01 4.826.01 7.302.01v-.03c95.433-.4 122.475-4.73 145.809-8.47 2.949-.47 5.838-.93 8.799-1.38 27.544-4.13 44.774-12.51 47.585-17.16 1.131-1.87 2.02-4.26 2.971-6.83 1.411-3.8 2.96-7.97 5.646-11.37 4.497-5.68 33.319-30.7 39.502-35.87.621-.52 1.308-1.08 2.042-1.68 6.578-5.37 16.918-13.82 16.918-22.24 0-2.98 1.55-237.838 3.022-460.921 1.332-201.788 2.6-393.945 2.6-396.154 0-.534.021-1.438.05-2.643.221-9.281.87-36.466-4.602-51.1-6.184-16.534-27.203-61.48-35.635-78.015-8.432-16.534-10.338-28.18-10.338-36.685a9 9 0 0 0-.065-.865c-.149-1.399-.342-3.208 1.95-3.63 2.811-.516 3.736-3.256 3.736-10.49 0-5.786-2.132-11.347-5.621-14.467z"
              clipRule="evenodd"
              fillRule="evenodd"
              data-color="1"
            />
          </g>
        </svg>

        {/* Soda Can */}
        <img
          ref={canRef}
          src={heroCan}
          alt="Soda Can"
          className="relative z-10 w-[14rem] transition-transform duration-100 hover:scale-105"
        />
      </div>

      <img
        ref={hempLeafRef}
        className="absolute right-0 z-0 mr-[10rem] mb-[15rem] w-[20rem]"
        src={hempLeaf}
        alt=""
      />
    </>
  );
};

export default InteractiveSodaCan;
