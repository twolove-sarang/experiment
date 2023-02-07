import React from "react";
import { useNavigate } from "react-router-dom";

const menu = ["firebase", "api", "design"];
export default function MenuSection() {
  const navigate = useNavigate();
  const navigatePage = (e) => {
    navigate(`/menu/${e.target.textContent}`);
  };
  return (
    <>
      <input
        type="text"
        placeholder="searching..."
        className="p-2 ml-4 outline-none w-64 drop-shadow-md rounded-lg mb-10"
      />
      {menu &&
        menu.map((el, index) => (
          <div
            key={index}
            onClick={navigatePage}
            className="p-2 ml-4 font-normal hover:bg-blue hover:text-white transition-colors ease-out rounded-md"
          >
            {el}
          </div>
        ))}
    </>
  );
}
