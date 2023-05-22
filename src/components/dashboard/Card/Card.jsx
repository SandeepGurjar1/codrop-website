import React, { useEffect, useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import { AiOutlineArrowDown } from "react-icons/ai";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import Chart from "react-apexcharts";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

function CompactCard({ param, setExpanded }) {
  return (
    <motion.div
      className="flex flex-1 h-[7rem] w-[14rem] mb-12 sm:lg-0 rounded-[0.7rem] text-white p-[1rem] relative cursor-pointer hover:shadow-none"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="flex-1 flex flex-col justify-end gap-[1rem]">
        <CircularProgressbar
          className="overflow-visible"
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span className="text-[13px] font-bold">{param.title}</span>
      </div>
      <div className="flex flex-1 flex-col items-end justify-between">
        <AiOutlineArrowDown />
        <span className="text-[18px] font-bold">{param.highest_rating}</span>
        <span className="text-[11px] font-bold">Max Rating</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000000",
        opacity: 1,
      },

      fill: {
        colors: ["#ffffff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      // tooltip: {
      //   x: {
      //     format: "dd/MM/yy HH:mm",
      //   },
      // },
      grid: {
        show: true,
      },
      xaxis: {
        categories: param.x_axis,
      },
    },
    series: [
      {
        name: "rating",
        data: param.y_axis,
      },
    ],
  };
  // console.log(data.series);

  return (
    <motion.div
      className="justify-center text-white z-10 rounded-lg flex flex-col items-center"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div className="cursor-pointer self-end p-2">
        <AiOutlineArrowDown onClick={setExpanded} />
      </div>
      <span className="text-[26px] font-bold shadow-[0px_0px_15px_15px_#fff">
        {param.title}
      </span>
      <Chart className='flex justify-center items-center w-auto text-black' options={data.options} series={data.series} type="area" />
      <span className="text-[15px] pb-2">Contests</span>
    </motion.div>
  );
}

export default Card;
