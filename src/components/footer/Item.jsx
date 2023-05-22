import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-gray-400 hover:text-black hover:font-bold hover:p-1 hover:rounded-lg bg-gradient-to-br hover:from-yellow-300 hover:to-red-500 duration-300
          text-sm cursor-pointer"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;