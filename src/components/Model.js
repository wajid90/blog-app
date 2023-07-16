import React from "react";
import portfolios from "../assets/data/portfolioData";

const Model = ({ activeId, setShowModel }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeId);

  return (
    <div className="select-none w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div className="w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5 mt-[40px]">
        <div>
          <figure>
            <img src={portfolio?.imgUrl} alt="" />
          </figure>
        </div>
        <div>
          <h2 className="text-2xl text-headingColor font-[700] my-1">
            {portfolio.title}
          </h2>
          <p className="text-[15px] leading-7 text-smallTextColor">
            {portfolio.description}
          </p>
          <div className="mt-2 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-[10px] text-[700]">
              Technology:
            </h4>
            {portfolio?.technologies?.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0"
              >
                {item}
              </span>
            ))}
          </div>
          <a href="#">
            <button className="bg-primaryColor text-white py-2 px-4 my-1 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
              Live Site
            </button>
          </a>
        </div>
        <button
          className="w-[1.8rem] bg-white absolute top-[1.7rem] right-[1.8rem] text-[25px] rounded-[3px] flex items-center justify-center leading-0 cursor-pointer"
          onClick={() => setShowModel(false)}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Model;
