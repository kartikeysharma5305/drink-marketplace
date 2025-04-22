import React from "react";

const InfiniteSlider = ({ sliderText }) => {
  const items = [
    { id: 1, className: "item1", text: sliderText },
    { id: 2, className: "item2", text: sliderText },
    { id: 3, className: "item3", text: sliderText },
    { id: 4, className: "item4", text: sliderText },
    { id: 5, className: "item5", text: sliderText },
    { id: 6, className: "item6", text: sliderText },
    { id: 7, className: "item7", text: sliderText },
    { id: 8, className: "item8", text: sliderText },
  ];

  return (
    <>
      {/* Scoped styles */}
      <style>{`
        .infinite-slider *,
        .infinite-slider *::before,
        .infinite-slider *::after {
          box-sizing: border-box;
        }

        .infinite-slider * {
          margin: 0;
        }

        @keyframes scrollLeft {
          to {
            left: -200px;
          }
        }

        .infinite-slider .item {
          width: 200px;
          height: 150px;
          background-color: #23022E;
          border-radius: 6px;
          position: absolute;
          left: max(calc(300px * 8), 100%);
          animation-name: scrollLeft;
          animation-duration: 30s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font:bold;
          font-size: 2rem;
          font-weight: 600;
        }

        .infinite-slider .item1 {
          animation-delay: calc(30s / 8 * (8 - 1) * -1);
        }
        .infinite-slider .item2 {
          animation-delay: calc(30s / 8 * (8 - 2) * -1);
        }
        .infinite-slider .item3 {
          animation-delay: calc(30s / 8 * (8 - 3) * -1);
        }
        .infinite-slider .item4 {
          animation-delay: calc(30s / 8 * (8 - 4) * -1);
        }
        .infinite-slider .item5 {
          animation-delay: calc(30s / 8 * (8 - 5) * -1);
        }
        .infinite-slider .item6 {
          animation-delay: calc(30s / 8 * (8 - 6) * -1);
        }
        .infinite-slider .item7 {
          animation-delay: calc(30s / 8 * (8 - 7) * -1);
        }
        .infinite-slider .item8 {
          animation-delay: calc(30s / 8 * (8 - 8) * -1);
        }
      `}</style>

      {/* Component markup */}
      <div className="infinite-slider relative mx-auto mt-[5rem] h-[150px] w-[90%] max-w-[1536px] overflow-hidden">
        {items.map((item) => (
          <div
            key={item.id}
            className={`item font-[Playwrite_HU] ${item.className}`}
          >
            {item.text}
          </div>
        ))}
      </div>
    </>
  );
};

export default InfiniteSlider;
