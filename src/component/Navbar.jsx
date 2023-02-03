import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Link to="/">
      <div
        className="w-72 text-6xl font-extrabold text-center p-16
        transition ease-in-out duration-300
        hover:scale-125 hover:-translate-y-1 hover:cursor-pointer"
      >
        Experiment
      </div>
    </Link>
  );
}
