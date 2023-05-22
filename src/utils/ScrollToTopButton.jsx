import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";


const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative">
      {" "}
      {showTopBtn && (
        <FaAngleUp className="fixed bottom-[40px] right-[25px] z-70 bg-[#831c82] border-2 border-solid border-[#fff] rounded-lg h-[50px] w-[50px] text-white hover:text-black cursor-pointer transition-all animate-bounce scroll-smooth transition-400 ease-in-out hover:animate-none hover:bg-[#551B] hover:border-2 hover:border-solid hover:border-[#551B54]" onClick={goToTop} />
      )}{" "}
    </div>
  );
};

export default ScrollToTop;
