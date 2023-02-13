import React from "react";

export default function OutletHeader({ menuName, dialogue }) {
  return (
    <>
      <section>
        <p
          className="text-4xl font-extrabold text-center -mt-16
        md:hover:translate-x-6 ease-out duration-700 transition-all uppercase
        md:text-left md:mt-0"
        >
          {menuName}
        </p>
        <div className="mt-2 text-center md:text-left">{dialogue}</div>
      </section>
    </>
  );
}
