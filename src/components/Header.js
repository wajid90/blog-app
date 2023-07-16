import React, { useEffect, useRef } from "react";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  useEffect(() => {
    stickyHeader();
    return window.removeEventListener("scroll", stickyHeader);
  }, []);

  return (
    <header
      ref={headerRef}
      className="w-full  h-[70px] leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] select-none bg-primaryColor text-white text-[10px] font-[500] rounded-full flex items-center justify-center">
              W
            </span>
            <div className="leading-[20px] select-none">
              <h2 className="text-md text-smallTextColor font-[700]">Wajid</h2>
              <p className="text-smallTextColor text-[12px] font-[500]">
                Person
              </p>
            </div>
          </div>

          {/* ------------ manu data ------------- */}
          <div className="menu select-none" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2 select-none">
            <button className="flex items-center gap-2 text-smallTextColor font-[500] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
              <i class="ri-send-plane-fill"></i>
              Lets's Talk
            </button>
            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
