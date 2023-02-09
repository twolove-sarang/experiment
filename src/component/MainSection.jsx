import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function MainSection() {
  return (
    <>
      <section>
        <div className="flex items-center font-bold justify-center md:invisible">
          <AiOutlineArrowUp />
          <p>Press the menu button and enjoy this project.</p>
        </div>

        <p
          className="flex items-center font-bold justify-center invisible md:visible
            md:justify-start lg:w-96"
        >
          <AiOutlineArrowLeft />
          Press the menu button and enjoy this project
        </p>

        <p className="text-4xl mt-5 mb-5 animate-[wiggle_1s_ease-in-out_infinite] md:invisible">
          🤟
        </p>

        <div>
          <p className="font-bold mt-4 md:-mt-20">
            Please come over to my pages 🤟
          </p>
        </div>
      </section>
    </>
  );
}
