import React from "react";
import heroImg from "../assets/images/muhib.png";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="pt-0 select-none" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              hello WelCome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[30px]
              leading-[25px]
              sm:leading-[35px]
              "
            >
              I'm Wajid Ali Altamash <br /> Software Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-deley="200"
              className="flex items-center gap-6 mt-5"
            >
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex flex-items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i href="#contact">Hire Me</i>
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See Portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor font-[500] text-[15px] leading-7 sm:pl-1 sm:pr-10 my-4"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              magnam asperiores neque mollitia nisi natus sequi, id, totam
              dolorem numquam
            </p>
            <div className="flex items-center gap-9 mt-15">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow me:
              </span>
              <span>
                <a className="text-smallTextColor text-[18px] font-[600]">
                  <i class="ri-youtube-fill"></i>
                </a>
              </span>
              <span>
                <a className="text-smallTextColor text-[18px] font-[600]">
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span>
                <a className="text-smallTextColor text-[18px] font-[600]">
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a className="text-smallTextColor text-[18px] font-[600]">
                  <i class="ri-facebook-circle-fill"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center  rounded-full bg-smallTextColor">
              <img src={heroImg} alt="" className="rounded-full cover-fill mt-10" />
            </figure>
          </div>
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={6} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Years of Experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Success Rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={150} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Happy Clients
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={249} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Project Completed
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
