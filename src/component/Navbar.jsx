import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Link to="/">
      <div
        className="w-full mx-auto text-2xl font-extrabold m-6 text-center
        sm:text-3xl sm:text-center
        md:text-4xl md:text-left md:ml-12 md:mb-10
        lg:text-5xl lg:ml-16 lg:my-20
        xl:text-6xl xl:my-24
        transition ease-in-out duration-300
        hover:scale-105  hover:cursor-pointer"
      >
        Experiment
      </div>
    </Link>
  );
}
