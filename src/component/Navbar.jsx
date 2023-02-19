import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Link to="/">
      <div
        className="w-full mx-auto text-2xl font-extrabold m-6
        sm:text-3xl 
        md:text-4xl md:text-left md:ml-12 md:mb-10
        lg:text-5xl lg:ml-16 lg:my-20
        xl:text-6xl"
      >
        Experiment
      </div>
    </Link>
  );
}
