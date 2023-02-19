import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Category from "./Category";
import Navbar from "./Navbar";
import OutletSection from "./OutletSection";
import { FiMenu } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";

const menu = ["firebase", "api", "design", "withwith"];
export default function MenuSection() {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const navigate = useNavigate();
  const navigatePage = (e) => {
    navigate(`/menu/${e.target.textContent}`);
    setDropdownVisibility((prev) => !prev);
  };

  return (
    <div className="relative">
      <div className="md:invisible absolute w-full flex-col">
        <div>
          {dropdownVisibility ? (
            <>
              <div className="flex justify-between mx-10 items-start">
                <Navbar />
                <button
                  onClick={() => setDropdownVisibility(!dropdownVisibility)}
                  className="mt-8"
                >
                  <HiChevronDown />
                </button>
              </div>

              <div className="bg-white absolute w-full h-screen z-10">
                {menu &&
                  menu.map((el, index) => (
                    <div
                      key={index}
                      onClick={navigatePage}
                      className="uppercase cursor-pointer hover:font-bold text-center my-2"
                    >
                      {el}
                    </div>
                  ))}
              </div>
            </>
          ) : (
            <div className="flex justify-between mx-10">
              <Navbar />
              <button
                onClick={() => setDropdownVisibility(!dropdownVisibility)}
              >
                <FiMenu />
              </button>
            </div>
          )}
          <div className="mt-24">
            <OutletSection />
          </div>
        </div>
      </div>

      <div className="invisible md:visible md:flex-col absolute">
        <Navbar />
        <div className="md:flex">
          <div>
            <Category menu={menu} navigatePage={navigatePage} />
          </div>
          <OutletSection />
        </div>
      </div>
    </div>
  );
}
