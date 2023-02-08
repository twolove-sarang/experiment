import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiChevronRight } from "react-icons/fi";

const menu = ["firebase", "api", "design"];
export default function MenuSection() {
  const navigate = useNavigate();
  const navigatePage = (e) => {
    navigate(`/menu/${e.target.textContent}`);
  };

  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  return (
    <>
      {/* <input
        type="text"
        placeholder="searching..."
        className="p-2 ml-4 outline-none w-64 drop-shadow-md rounded-lg mb-10"
      /> */}
      <div className="flex justify-center">
        <button
          onClick={(e) => setDropdownVisibility(!dropdownVisibility)}
          className="md:invisible"
        >
          {dropdownVisibility ? (
            <div className="font-bold bg-blue text-white p-2 rounded-lg shadow-lg">
              menu
            </div>
          ) : (
            <>
              <div className="font-bold mb-2 p-2">menu</div>
              {menu &&
                menu.map((el, index) => (
                  <div
                    key={index}
                    onClick={navigatePage}
                    className="p-2 w-44 font-normal text-center uppercase text-md
                  hover:bg-blue hover:text-white ease-out rounded-md"
                  >
                    {el}
                  </div>
                ))}
            </>
          )}
        </button>
      </div>
      <div className="md:-mt-36">
        {menu &&
          menu.map((el, index) => (
            <div
              key={index}
              onClick={navigatePage}
              className="p-2 font-normal text-center uppercase text-sm
             hover:bg-blue hover:text-white ease-out rounded-md
             invisible md:visible
              md:text-left md:mx-10 md:w-48 md:text-lg"
            >
              {el}
            </div>
          ))}
      </div>
    </>
  );
}
