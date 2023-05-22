import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <span
          key={icon.icon}
          className="cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 p-2 text-xl hover:animate-bounce hover:text-black hover:font-bold bg-gradient-to-br hover:from-yellow-300 hover:to-red-500
        duration-300 "
        >
          <icon.icon/>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;