import React, { useState } from "react";

const FaqSection = () => {
  const faqData = [
    {
      question: "Do you offer freelancers?",
      answer:
        "Yes, we offer a wide range of freelancers with diverse skills and expertise to meet your project requirements. Our freelancers undergo a rigorous selection process to ensure quality and reliability."
    },
    {
      question:
        "What's the guarantee that I will be satisfied with the hired talent?",
      answer:
        "We strive for customer satisfaction. If you are not fully satisfied with the hired talent, we provide support and mediation to resolve any issues. Your happiness and project success are our priorities."
    },
    {
      question: "Can I hire multiple talents at once?",
      answer:
        "Absolutely! You can hire multiple talents simultaneously to accelerate your project timelines and leverage a variety of skills. Our platform supports efficient collaboration and management of multiple freelancers."
    },
    {
      question: "Why should I not go to an agency directly?",
      answer:
        "Choosing our platform over agencies offers flexibility, cost-effectiveness, and access to a diverse talent pool. You have direct control over hiring decisions and project management, ensuring a personalized experience."
    },
    {
      question:
        "Who can help me pick the right skillset and duration for my project?",
      answer:
        "Our team of experts is dedicated to assisting you in selecting the optimal skillset and project duration. We provide personalized recommendations based on your project requirements and desired outcomes."
    }
  ];

  // State to manage which question is currently expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle the expanded state of a question
  const toggleFAQ = index => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="h-full w-full p-10 pt-28">
      <div className="faqSection relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-[#E8EEE7] flex rounded-2xl">
        <div className="group1 w-1/2 h-full p-20">
          <h2 className="text-xl font-briem font-light text-[#707071]">
            What's on your mind
          </h2>
          <h1 className="text-5xl font-manrope font-medium">Ask Questions</h1>
          <div className="svgPath w-full h-full p-10 px-0">
            <div className="svgPath w-full h-full p-10 px-0">
              <svg
                width="450"
                height="460"
                viewBox="0 0 491 475"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M251.005 123.04H14.5072V0H255.167C369.093 0 401.151 14.6756 444.456 57.9807C477.934 91.7389 490.999 135.444 490.999 205.385V514.607H349.717V205.385C349.717 204.652 349.706 203.921 349.685 203.191L275.051 253.194L275.078 253.215L144.958 340.344C136.345 346.116 130.769 355.335 130.769 365.723C130.769 383.206 146.563 397.378 166.047 397.378L166.077 397.393H283.781V514.592H166.077H166.05C74.3429 514.592 0 447.884 0 365.596C0 313.559 29.7294 267.753 74.779 241.107L251.005 123.04Z"
                  fill="url(#paint0_linear_0_212)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_212"
                    x1="245.5"
                    y1="2.84126e-08"
                    x2="245"
                    y2="457.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>{" "}
          </div>
        </div>
        <div className="group2 w-1/2 p-10 py-20">
          <ul>
            {faqData.map((item, index) =>
              <li key={index}>
                <button
                  className="relative flex gap-2 items-center w-full py-5 text-lg font-semibold text-left border-b border-gray-300"
                  aria-expanded={expandedIndex === index}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="flex-1">
                    {item.question}
                  </span>
                  {expandedIndex !== index
                    ? <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z"
                          fill="black"
                        />
                      </svg>
                    : <svg
                        className="flex-shrink-0 w-4 h-4 ml-auto transform transition duration-200"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className="rotate-0"
                        />
                      </svg>}
                </button>
                {expandedIndex === index &&
                  <div className="transition-all duration-300 ease-in-out overflow-hidden">
                    <div className="pb-5 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
