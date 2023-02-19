import React from "react";

export default function Category({ menu, navigatePage }) {
  return (
    <>
      {menu &&
        menu.map((el, index) => (
          <div
            key={index}
            onClick={navigatePage}
            className="invisible uppercase p-2 font-normal text-center text-sm
        hover:bg-blue hover:text-white ease-out rounded-md
        md:visible md:text-left md:mx-10 md:w-48 md:text-lg
        lg:ml-12"
          >
            {el}
          </div>
        ))}
    </>
  );
}
