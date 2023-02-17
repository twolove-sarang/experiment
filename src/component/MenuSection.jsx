import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Category from "./Category";
import Navbar from "./Navbar";
import OutletSection from "./OutletSection";

const menu = ["firebase", "api", "design", "withwith"];
export default function MenuSection() {
  const navigate = useNavigate();
  const navigatePage = (e) => {
    navigate(`/menu/${e.target.textContent}`);
  };

  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  return (
    <>
      <div className="mx-6">
        <Navbar />
        <div className="md:flex md:items-start">
          {dropdownVisibility ? (
            <div className="md:invisible relative">
              <button
                onClick={() => setDropdownVisibility(!dropdownVisibility)}
                className="w-6 h-1 rounded-full bg-black mb-4 m-2 absolute right-4 -top-12"
              ></button>
              <div className="absolute right-4 -top-4 ease-out transition">
                {menu &&
                  menu.map((el, index) => (
                    <div
                      key={index}
                      onClick={navigatePage}
                      className="p-2 font-normal text-right uppercase text-md w-36 cursor-pointer
                      hover:font-bold
                      md:absolute"
                    >
                      {el}
                    </div>
                  ))}
              </div>
              <div className="md:-mt-6">
                <Category menu={menu} navigatePage={navigatePage} />
              </div>
            </div>
          ) : (
            <div className="md:invisible">
              <button
                onClick={() => setDropdownVisibility(!dropdownVisibility)}
                className="w-6 h-1 rounded-full bg-blue mb-4 m-2 absolute right-10 top-9"
              ></button>
              <div className="md:-mt-6">
                <Category menu={menu} navigatePage={navigatePage} />
              </div>
            </div>
          )}

          <OutletSection />
        </div>
      </div>
    </>
  );
}
