import React from "react";

// ReusableButton component: A customizable button with text and an SVG icon
const ReusableButton = ({ styles, text, iconColor, buttonSize }) => {
  return (
    // Container div to position the button to the right
    <div className="relative float-right inline-block">
      <button
        // Combine custom styles with default styling for the button
        className={`relative flex items-center space-x-2 rounded-full border-2 ${styles} cursor-pointer px-7 py-7 font-[Playwrite_HU] text-2xl font-extrabold shadow-[-6px_10px_0px_0px_rgba(255,255,255,1)] transition duration-300 ease-in-out`}
      >
        {/* Button text with dynamic padding based on buttonSize prop */}
        <span className={`p-${buttonSize}`}>{text}</span>
        {/* SVG icon with customizable color */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill={iconColor} // Icon color from props
          stroke="#e3e3e3"
          strokeWidth="40"
        >
          {/* Path for the SVG icon (custom arrow/graphic) */}
          <path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" />
        </svg>
      </button>
    </div>
  );
};

export default ReusableButton;
