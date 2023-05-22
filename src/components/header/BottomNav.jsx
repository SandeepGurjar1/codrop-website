import React, { useState } from "react";
import { Link } from "react-router-dom";
// Icons
import { BiHomeAlt } from "react-icons/bi";
import { MdLocalLibrary } from "react-icons/md";
import { FcCollaboration } from "react-icons/fc";
import { GiNewspaper } from "react-icons/gi";
import { RiTeamFill, RiDashboardFill } from "react-icons/ri";
// import useLocalStorage from 'use-local-storage';

const user = JSON.parse(localStorage.getItem("user"));

const BottomNav = () => {
  const [activeNav, setActiveNav] = useState("/");
  return (
    <nav className="flex py-1 justify-center shadow-[0_35px_60px_25px_rgb(0,0,0)] lg:hidden gap-4 sm:gap-8 items-center w-full sm:w-max sm:px-4 z-50 bg-gradient-to-br from-cyan-300 to-blue-500 hover:text-black hover:font-bold fixed bottom-0 rounded-t-xl">
      <Link
        to={"/"}
        onClick={() => setActiveNav("/")}
        className={
          activeNav === "/"
            ? "active text-4xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
            : "text-4xl flex text-textColor hover:text-black hover:font-bold items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
        }
      >
        <BiHomeAlt />
        {/* Home */}
      </Link>
      <Link
        to={"/library"}
        onClick={() => setActiveNav("/library")}
        className={
          activeNav === "/library"
            ? "active text-4xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
            : "text-4xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
        }
      >
        <MdLocalLibrary />
        {/* Library */}
      </Link>
      <Link
        to={"/collab"}
        onClick={() => setActiveNav("/collab")}
        className={
          activeNav === "/collab"
            ? "active text-4xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
            : "text-4xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
        }
      >
        <FcCollaboration />
        {/* Collab */}
      </Link>
      <Link
        to={"/ai-news"}
        onClick={() => setActiveNav("/ai-news")}
        className={
          activeNav === "/ai-news"
            ? "active text-4xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
            : "text-4xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
        }
      >
        <GiNewspaper />
        {/* News */}
      </Link>

      {user && (
        <Link
          to={"/user/dashboard"}
          onClick={() => setActiveNav("/ai-news")}
          className={
            activeNav === "/ai-news"
              ? "active text-4xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
              : "text-4xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
          }
        >
          <RiDashboardFill />
          {/* Dashboard */}
        </Link>
      )}
      {!user && (
        <Link
          to={"/about-us"}
          onClick={() => setActiveNav("/about-us")}
          className={
            activeNav === "/about-us"
              ? "active text-4xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
              : "text-4xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
          }
        >
          <RiTeamFill />
        </Link>
      )}
    </nav>
  );
};

export default BottomNav;
