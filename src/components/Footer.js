import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#12141e] pt-12">
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="m-full sm:w-1/2">
            <h2 className="text-[16px] leading-0 text-white font-[600] mb-5 md:text-[1rem]">
              Do you want to make beautiful products
            </h2>
            <a href="#contact">
              <button className="bg-primaryColor text-white font-[500] flex flex-items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                <i href="#contact">Hire Me</i>
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 text-[12px] leading-7 mt-4 sm:mt-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              officia, quos totam debitis voluptates inventore! Iure autem velit
              inventore quam, amet neque enim quaerat nulla odit quisquam, iusto
              corrupti cupiditate.
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow Me :
              </span>

              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center text-white">
                <a className="text-white text-[18px] font-[600]">
                  <i class="ri-youtube-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center text-white">
                <a className="text-white text-[18px] font-[600]">
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center text-white">
                <a className="text-white text-[18px] font-[600]">
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center text-white">
                <a className="text-white text-[18px] font-[600]">
                  <i class="ri-facebook-circle-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-10 mt-10">
            <li>
              <a href="#about" className="text-gray-400 text-[12px] font-[600]">
                About
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="text-gray-400 text-[12px] font-[600]"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-gray-400 text-[12px] font-[600]"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-400 text-[12px] font-[600]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#1b1e29] py-3 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[10px] flex items-center justify-center">
                  W
                </span>
                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[15px]">
                    Wajid
                  </h2>
                  <p className="text-gray-200 font-[500] text-[12px]">Person</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-[14px]">
                Copyright 2023 by wajid
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
