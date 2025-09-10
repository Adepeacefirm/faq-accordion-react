import React, { useState } from "react";
import { assets } from "../assets/assets";

const FaqAcccrdion = () => {
  const faqData = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);
  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div>
      {faqData.map((item, index) => {
        return (
          <div key={index}>
            <button
              className="flex items-center gap-4 w-full"
              onClick={() => {
                console.log(index);
                toggle(index);
                console.log(activeIndex);
              }}
            >
              <span className="leading-5 font-bold text-start text-[hsl(292,42%,14%)] hover:text-[hsl(281,83%,54%)] hover:cursor-pointer transition-colors duration-300">
                {item.question}
              </span>{" "}
              <span className=" w-[20%] ml-auto">
                {activeIndex === index ? (
                  <img
                    className="ml-auto"
                    src={assets.icon_minus}
                    alt="icon minus"
                  />
                ) : (
                  <img
                    className="ml-auto"
                    src={assets.icon_plus}
                    alt="icon plus"
                  />
                )}
              </span>
            </button>
            <div className="text-sm text-[hsl(292,16%,49%)] py-4 leading-5">
              {activeIndex === index && item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAcccrdion;
