import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const menu = ["FireBase", "CSS"];
export default function MenuSection() {
  const navigate = useNavigate();
  const navigatePage = (e) => {
    navigate(`/menu/${e.target.textContent}`);
  };
  return (
    <div className="">
      {menu &&
        menu.map((el) => (
          <div
            onClick={navigatePage}
            className="p-2 ml-4 font-normal hover:bg-blue hover:text-white transition-colors ease-out rounded-md"
          >
            {el}
          </div>
        ))}
    </div>
  );
}
