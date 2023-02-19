import React from "react";

export default function MainSection() {
  return (
    <>
      <section>
        <div className="flex items-center font-bold justify-center md:invisible">
          <p>Press the menu button and enjoy this project.</p>
        </div>

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
