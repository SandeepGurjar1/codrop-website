import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card/Card";
import { BiPaperPlane } from "react-icons/bi";
import { AiOutlineArrowDown } from "react-icons/ai";
import axios from "axios";

const Dashboard = () => {
  const form = useRef();

  // async function fetchData() {
  //   const cc_username = localStorage.getItem("cc_username");
  //   // console.log(cc_username, typeof cc_username);

  //   if (
  //     cc_username !== "" ||
  //     cc_username !== undefined ||
  //     cc_username !== null
  //   ) {
  //     const ccData = await axios.get(
  //       `${process.env.REACT_APP_CP_BASE_URL}` + "codechef/" + `${cc_username}`,
  //       { headers: { Accept: "application/json" } }
  //     );
  //     localStorage.setItem("codechef_data", JSON.stringify(ccData.data));
  //   }

  //   const cf_username = localStorage.getItem("cf_username");

  //   if (
  //     cf_username !== "" ||
  //     cf_username !== undefined ||
  //     cf_username !== null
  //   ) {
  //     // const cfData = await axios.get(
  //     //   `${process.env.REACT_APP_CP_BASE_URL}` +
  //     //     "codeforces/" +
  //     //     `${cf_username}`,
  //     //   { headers: { Accept: "application/json" } }
  //     // );
  //     // localStorage.setItem("codeforces_data", JSON.stringify(cfData.data));
  //   }

  //   const lc_username = localStorage.getItem("lc_username");

  //   if (
  //     lc_username !== "" ||
  //     lc_username !== undefined ||
  //     lc_username !== null
  //   ) {
  //     // const lcData = await axios.get(
  //     //   `${process.env.REACT_APP_CP_BASE_URL}` + "leetcode/" + `${lc_username}`,
  //     //   { headers: { Accept: "application/json" } }
  //     // );
  //     // // console.log(lcData);
  //     // localStorage.setItem("leetcode_data", JSON.stringify(lcData.data));
  //     // console.log(localStorage.getItem("leetcode_data"));
  //   }
  // }

  // fetchData();

  const saveData = async (e) => {
    // e.preventDefault();

    localStorage.setItem(
      "cc_username",
      document.getElementById("codechef_username").value
    );

    localStorage.setItem(
      "cf_username",
      document.getElementById("codeforces_username").value
    );

    localStorage.setItem(
      "lc_username",
      document.getElementById("leetcode_username").value
    );

    // await fetchData();
  };

  // const codechefContests = [];
  // const codechefContestsRatings = [];
  // if (JSON.parse(localStorage.getItem("codechef_data"))!==undefined && JSON.parse(localStorage.getItem("codechef_data")).contest_ratings!==undefined) {
  //   JSON.parse(localStorage.getItem("codechef_data")).contest_ratings.forEach(
  //     (contest) => {
  //       codechefContests.push(contest.code);
  //       codechefContestsRatings.push(parseInt(contest.rating));
  //     }
  //   );
  // }

  // const codeforcesContests = [];
  // const codeforcesContestsRatings = [];
  // if (JSON.parse(localStorage.getItem("codechef_data"))!==undefined && JSON.parse(localStorage.getItem("codeforces_data")).contests!==undefined) {
    //   JSON.parse(localStorage.getItem("codeforces_data")).contests.forEach(
  //     (contest) => {
  //       codeforcesContests.push(
  //         contest.Contest.replace("Codeforces Round ", "")
  //       );
  //       codeforcesContestsRatings.push(parseInt(contest["New Rating"]));
  //     }
  //   );
  // }

  // // console.log(codeforcesContests);
  // // console.log(codeforcesContestsRatings);

  // const cardsData = [
    //   {
      //     title: "Codechef",
  //     color: {
  //       backGround: "linear-gradient(180deg, #9d53da 0%, #a03be8 100%)",
  //       boxShadow: "0px 10px 20px 0px #e0c6f5",
  //     },
  //     highest_rating: JSON.parse(localStorage.getItem("codechef_data"))
  //       .highest_rating,
  //     barValue:
  //       (JSON.parse(localStorage.getItem("codechef_data")).highest_rating -
  //         JSON.parse(localStorage.getItem("codechef_data")).rating) %
  //       100,
  //     icon: AiOutlineArrowDown,
  //     x_axis: codechefContests,
  //     y_axis: codechefContestsRatings,
  //   },
  //   {
  //     title: "Codeforces",
  //     color: {
  //       backGround: "linear-gradient(180deg, #c94857 0%, #fa3145 100%)",
  //       boxShadow: "0px 10px 20px 0px #FDC0C7",
  //     },
  //     highest_rating: JSON.parse(localStorage.getItem("codeforces_data"))[
  //       "max rating"
  //     ],
  //     barValue:
  //       (JSON.parse(localStorage.getItem("codeforces_data"))["max rating"] -
  //         JSON.parse(localStorage.getItem("codeforces_data")).rating) %
  //       100,
  //     icon: AiOutlineArrowDown,
  //     x_axis: codeforcesContests,
  //     y_axis: codeforcesContestsRatings.reverse(),
  //   },
  //   {
  //     title: "Leetcode",
  //     color: {
  //       backGround:
  //         "linear-gradient(rgb(248, 190, 98) -146.42%, rgb(251, 175, 43) -46.42%)",
  //       boxShadow: "0px 10px 20px 0px #F9D59B",
  //     },
  //     highest_rating: JSON.parse(localStorage.getItem("leetcode_data"))
  //       .contribution_points,
  //     barValue: (JSON.parse(
  //       localStorage.getItem("leetcode_data")
  //     ).acceptance_rate!==undefined) ? JSON.parse(
  //       localStorage.getItem("leetcode_data")
  //     ).acceptance_rate.replace("%", "") : 0,
  //     icon: AiOutlineArrowDown,
  //     x_axis: ["Easy Solved", "Medium Solved", "Hard Solved"],
  //     y_axis: [
  //       JSON.parse(localStorage.getItem("leetcode_data")).easy_questions_solved,
  //       JSON.parse(localStorage.getItem("leetcode_data"))
  //         .medium_questions_solved,
  //       JSON.parse(localStorage.getItem("leetcode_data")).hard_questions_solved,
  //     ],
  //   },
  // ];
  
  // Static data
  const codechefContests = ['Contest1', 'Contest2', 'Contest3', 'Contest4', 'Contest5','Contest6', 'Contest7'];
  const codechefContestsRatings = [1247,1388,1204,1489,1425,1727,1743];
  const codeforcesContests = ['Contest1', 'Contest2', 'Contest3', 'Contest4', 'Contest5','Contest6', 'Contest7'];
  const codeforcesContestsRatings = [812,913,1104,1011,1098,978,1243]

  const cardsData = [
    {
      title: "Codechef",
      color: {
        backGround: "linear-gradient(180deg, #9d53da 0%, #a03be8 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      highest_rating: 1744,
      barValue: 78,
      icon: AiOutlineArrowDown,
      x_axis: codechefContests,
      y_axis: codechefContestsRatings,
    },
    {
      title: "Codeforces",
      color: {
        backGround: "linear-gradient(180deg, #c94857 0%, #fa3145 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      highest_rating: 1243,
      barValue: 89,
      icon: AiOutlineArrowDown,
      x_axis: codeforcesContests,
      y_axis: codeforcesContestsRatings
    },
    {
      title: "Leetcode",
      color: {
        backGround:
          "linear-gradient(rgb(248, 190, 98) -146.42%, rgb(251, 175, 43) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      highest_rating: 1431,
      barValue: 18,
      icon: AiOutlineArrowDown,
      x_axis: ["Easy Solved", "Medium Solved", "Hard Solved"],
      y_axis: [
        148,160,45
      ],
    },
  ];

  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center mb-12 gap-4">
        <form
          className="flex flex-wrap justify-center items-center gap-4"
          ref={form}
          onSubmit={saveData}
        >
          <div className="form-floating mb-3 xl:w-96">
            <input
              type="text"
              className="form-control block w-full px-3 py-0.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded-lg transition-200 ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="codechef_username"
              placeholder="codechef username"
            />
            <label for="floatingInput" className="text-gray-700">
              Codechef Username
            </label>
          </div>
          <div className="form-floating mb-3 xl:w-96">
            <input
              type="text"
              className="form-control block w-full px-3 py-0.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded-lg transition-200 ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="codeforces_username"
              placeholder="codeforces username"
            />
            <label for="floatingInput" className="text-gray-700">
              Codeforces Username
            </label>
          </div>
          <div className="form-floating mb-3 xl:w-96">
            <input
              type="text"
              className="form-control block w-full px-3 py-0.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded-lg transition-200 ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="leetcode_username"
              placeholder="leetcode username"
            />
            <label for="floatingInput" className="text-gray-700">
              Leetcode Username
            </label>
          </div>
          <div className="form-floating mb-3 xl:w-96">
            <motion.button
              whileTap={{ scale: 0.8 }}
              type="submit"
              className="bg-gradient-to-br from-cyan-500 to-blue-500 w-fit h-[50px] hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-red-500 px-4 font-semibold flex items-center justify-center gap-1 rounded-lg hover:text-black"
            >
              Submit
              <BiPaperPlane />
            </motion.button>
          </div>
        </form>
      </div>
      <div className="flex flex-wrap items-center justify-evenly gap-[10px]">
        {cardsData.map((card, id) => {
          return (
            <div key={id}>
              <Card
                title={card.title}
                color={card.color}
                barValue={card.barValue}
                value={card.value}
                png={card.icon}
                highest_rating={card.highest_rating}
                x_axis={card.x_axis}
                y_axis={card.y_axis}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
