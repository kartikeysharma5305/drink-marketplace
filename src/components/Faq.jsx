import React, { useState } from "react";
import faqsData from "../assets/data/FAQs";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="w-full p-8">
        <h1 className="text-center font-[Playwrite_HU] text-3xl font-bold text-[#23022E]">
          FAQ
        </h1>
        <div className="mt-8 space-y-8 text-center">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="cursor-pointer border-b-2 border-[#23022E] py-4"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex items-center justify-between">
                <span className="font-[Playwrite_HU] font-bold text-[#23022E]">
                  {faq.question}
                </span>
                <i
                  className={`fas fa-${
                    openIndex === index ? "minus" : "plus"
                  } text-[#23022E]`}
                ></i>
              </div>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <span className="block max-w-[65rem] text-left font-[poppins] text-sm font-bold text-[#23022E]">
                  {faq.answer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
