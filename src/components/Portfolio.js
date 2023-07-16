import React, { useEffect, useState } from "react";
import data from "../assets/data/portfolioData";
import Model from "./Model";

const Portfolio = () => {
  const [nextItem, setNextItem] = useState(6);
  const [portfolio, setPorfolio] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModel, setShowModel] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const loadMoreHandler = () => {
    setNextItem((prev) => prev + 3);
  };
  const setsHowModel = (id) => {
    setShowModel(true);
    setActiveId(id);
  };
  useEffect(() => {
    if (selectTab === "all") {
      setPorfolio(data);
    }
    if (selectTab === "Web Design") {
      const filteredData = data.filter(
        (item) => item.category === "Web Design"
      );
      setPorfolio(filteredData);
    }
    if (selectTab === "UX Design") {
      const filteredData = data.filter((item) => item.category === "Ux");
      setPorfolio(filteredData);
    }
  }, [selectTab]);
  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[1.5rem] font-[700]">
              My recent projects
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className="text-smallTextColor  text-[13px] font-[500] border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("Web Design")}
              className="text-smallTextColor text-[13px] font-[500] border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              Web Design
            </button>
            <button
              onClick={() => setSelectTab("UX Design")}
              className="text-smallTextColor text-[13px] font-[500] border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              Ux-Design
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap mt-12">
          {portfolio.slice(0, nextItem)?.map((portfolio, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group  max-w-full sm:w-[48.5%] md:w-[31.6%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img className="rounded-[8px]" src={portfolio?.imgUrl} alt="" />
              </figure>
              <div className="w-full h-full bg-headingColor bg-opacity-40 absolute top-0 left-0 z-[5]  hidden group-hover:block rounded-[8px]">
                <div className="w-full h-full flex justify-center items-center">
                  <button
                    onClick={() => setsHowModel(portfolio.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          {nextItem < portfolio.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              Load More
            </button>
          )}
        </div>
      </div>
      {showModel && <Model activeId={activeId} setShowModel={setShowModel} />}
    </section>
  );
};

export default Portfolio;
