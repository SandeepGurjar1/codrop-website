import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bottomCircleImage from "../../../assets/images/bottom_circle_shadow.png";
import codechefImage from "../../../assets/images/codechef.png";
import commingSoon from "../../../assets/images/comming_soon.png";
import codeforcesImage from "../../../assets/images/codeforces.png";
import leetcodeImage from "../../../assets/images/leetcode.png";
import dashboardImage from "../../../assets/images/1.png";
import libraryImage from "../../../assets/images/27.png";
import collabImage from "../../../assets/images/37.png";
import commingSoonImage from "../../../assets/images/commin_soon.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import { motion } from "framer-motion";
import axios from "axios";


const user = JSON.parse(localStorage.getItem("user"));

const platforms = [
  { id: 1, name: "Codechef", image: codechefImage },
  { id: 2, name: "", image: codeforcesImage },
  { id: 3, name: "Leetcode", image: leetcodeImage },
  { id: 4, name: "", image: commingSoonImage },
];

const Home = () => {
  const url = "https://kontests.net/api/v1/";
  const [allContests, setAllContests] = useState([]);
  // const [codechefContests, setCodechefContests] = useState([]);
  // const [codeforcesContests, setCodeforcesContests] = useState([]);
  // const [leetcodeContests, setLeetcodeContests] = useState([]);

  useEffect(() => {
    async function getContests() {
      const allContests = await axios.get(url + "all/");
      setAllContests(allContests);
      // const codechefContests = await axios.get(url + "codechef/");
      // setCodechefContests(codechefContests);
      // const codeforcesContests = await axios.get(url + "codeforces/");
      // setCodeforcesContests(codeforcesContests);
      // const leetcodeContests = await axios.get(url + "leetcode/");
      // setLeetcodeContests(leetcodeContests);
      // console.log(allContests);
      // console.log(codechefContests);
      // console.log(codeforcesContests);
      // console.log(leetcodeContests);
    }
    getContests();
  });

  return (
    <div className="items-center justify-center">
      <p className="text-[2.5rem] font-bold tracking-normal shadow-[0px_5px_10px_0px_#bb67ff] md:shadow-none md:bg-none bg-gradient-to-r from-[#bb67ff] to-[#c484f3] p-2 sm:p-4 rounded-lg leading-9 text-red-700">
        Welcome{" "}
        {user && (
          <span className="text-yellow-300 font-medium text-[2rem]">
            {user.displayName}!
          </span>
        )}
        {!user && <span className="text-yellow-300 text-[2rem]">Coder!</span>}
        <br />
        <span className="text-[2rem] text-red-700"> How is your day?</span>
      </p>
      <div className="h-fit grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="flex-1 flex flex-col items-start leading-9">
          <p className="text-base text-textColor">
            coDrop is a learning and performance tracking platform for daily
            coders like you and me. We provide a complete visualization to your
            increment and decrement in your profile. This is't a learn-to-code
            platform in and of itself, but it's a tremendous collection of
            programming materials selected by the community. Codrop act as an
            intermediate to make your navigation easy and fast.
          </p>
          <motion.button
            whileTap={{ scale: 0.8 }}
            type="button"
            className="bg-gradient-to-br from-cyan-500 to-blue-500 w-fit hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-red-500 px-2 py-1 font-semibold flex items-center justify-center gap-1 rounded-lg hover:text-black"
          >
            Check Out What's Hot Today
            <AiOutlineArrowDown className="animate-bounce" />
          </motion.button>
        </div>
        <div className="hidden h-[50vh] 2xl:h-[20vh] lg:flex flex-wrap relative flex-col-reverse  bg-gradient-to-b from-blue-50 to-blue-300 rounded-3xl">
          <img
            src={bottomCircleImage}
            className="w-full h-20"
            alt="upper_background"
          />
          <div className="w-full mb-3 absolute -top-10 flex gap-6 flex-wrap justify-center items-center px-10">
            {platforms.map((card) => (
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 200 }}
                key={card.id}
                className="w-auto h-[120px] items-center p-4 my-4 bg-gradient-to-t from-red-400 to-red-200 backdrop-blur-lg rounded-t-md rounded-b-2xl flex flex-col"
              >
                <img
                  src={card.image}
                  className="w-[100px] -mt-12 mb-3 hover:motion-safe:animate-spin"
                  alt={card.name}
                />
                <p className="font-bold text-textColor">{card.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <section class="container mx-auto px-6 p-10">
        <h2 class="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Features
        </h2>
        <hr className="m-10"></hr>
        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-1/2">
            <h4 class="text-3xl text-gray-800 font-bold mb-3">Dashboard</h4>
            <p class="text-gray-600 mb-8">
              Codrop provides you the dashboard created with React-Charts where
              you can visualise your rank change. In future updates we will be
              adding a feature to predict future rating graph on the basis of
              your Previous performance.
            </p>
          </div>
          <div class="w-full md:w-1/2">
            <img src={dashboardImage} alt="Dashboard" />
          </div>
        </div>

        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-1/2">
            <img src={libraryImage} alt="Reporting" />
          </div>
          <div class="w-full md:w-1/2 pl-10">
            <h4 class="text-3xl text-gray-800 font-bold mb-3">Library</h4>
            <p class="text-gray-600 mb-8">
              Now coders can not only visualise their rank. Instead they can
              improve rank by learning from our library section where we have
              best ever courses for coders like you.
            </p>
          </div>
        </div>

        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-1/2">
            <h4 class="text-3xl text-gray-800 font-bold mb-3">Collab</h4>
            <p class="text-gray-600 mb-8">
              In future we will come up with collaboration feature with an AI
              system built-in. We wish to provide best ever experience to our
              user.
            </p>
          </div>
          <div class="w-full md:w-1/2">
            <img src={collabImage} alt="Syncing" />
          </div>
        </div>
      </section>

      <section class="text-gray-600 font-extrabold">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-col items-center justify-center w-full mb-20 flex-wrap">
            <h1 class="sm:text-3xl text-2xl font-extrabold title-font text-gray-900 mb-4">
              Gallery
            </h1>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={commingSoon}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={commingSoon}
                />
              </div>
              <div class="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src={commingSoon}
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src={commingSoon}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={commingSoon}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={commingSoon}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="contests" class="mt-5">
        <h2 class="text-4xl font-extrabold text-center text-gray-800 mb-8">
          All Contests
        </h2>
        <hr className="m-10"></hr>
        <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-3">
          {allContests.data?.map((contest) => (
            <div
              key={contest}
              className="w-full sm:w-[250px] lg:w-[400px] m-4 bg-slate-100 hover:bg-slate-200 h-fit rounded-lg overflow-hidden backdrop:filter shadow-2xl transition-all transition-250 ease-in-out border-solid border-2 border-sky-300"
            >
              <div className="p-2">
                <h2 className="font-extrabold">{contest.name}</h2>
                <p className=" text-lg sm:text-xl lg:text-2xl">
                  Start Date : <t></t>
                  <span className="text-[#288e21] inline-block">
                    {" "}
                    {new Date(contest.start_time).toLocaleDateString()}
                  </span>
                </p>
                <p className=" text-lg sm:text-xl lg:text-2xl">
                  Start Time : <t></t>
                  <span className="text-[#288e21] inline-block">
                    {" "}
                    {new Date(contest.start_time).toLocaleTimeString()}
                  </span>
                </p>
                <p className=" text-lg sm:text-xl lg:text-2xl">
                  End Date : <t></t>
                  <span className="text-red-500 inline-block">
                    {" "}
                    {new Date(contest.end_time).toLocaleDateString()}
                  </span>
                </p>
                <p className=" text-lg sm:text-xl lg:text-2xl">
                  End Time : <t></t>
                  <span className="text-red-500 inline-block">
                    {" "}
                    {new Date(contest.end_time).toLocaleTimeString()}
                  </span>
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl">
                  Total Duration : <t></t>
                  <span className="text-blue-500 inline-block">
                    {Math.floor(parseInt(contest.duration) / (24 * 3600)) +
                      " days " +
                      Math.floor(parseInt(contest.duration)%(24 * 3600) / 3600) +
                      " hours " +
                      Math.floor(parseInt(contest.duration) % (3600) / 60) +
                      " minutes " +
                      Math.floor(parseInt(contest.duration) % 60) +
                      " seconds"}
                  </span>
                </p>
                <p className="font-bold text-lg sm:text-xl lg:text-2xl">
                  In Next 24 Hours :{" "}
                  <span className="inline-block"> {contest.in_24_hours}</span>
                </p>
                <div className="flex flex-wrap justify-evenly">
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    href={contest.url}
                    target="_blank"
                    className="w-fit text-lg hover:text-xl sm:text-lg lg:text-xl text-black bg-gradient-to-br from-cyan-500 to-blue-500 hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-red-500 px-[9px] py-[7px] font-semibold flex items-center justify-center gap-1 rounded-lg hover:text-black"
                  >
                    VISIT CONTEST
                  </motion.a>
                </div>
              </div>
              <span className="w-full h-[80px] sm:h-[100px] mt-5 text-2xl font-extrabold text-black bg-gradient-to-br from-pink-300 to-purple-500 py-1 flex items-center text-center justify-center rounded-t-lg hover:text-black">
                PLATFORM : {contest.site.toString().toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>

      <section class="text-gray-400 bg-gray-900 body-font mt-5">
        <div class="px-5 py-10 mx-auto">
          <div class="flex flex-wrap items-center justify-center -m-4 text-center">
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">
                10
              </h2>
              <p class="leading-relaxed">Daily Visitors</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">
                23
              </h2>
              <p class="leading-relaxed">Users</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
