import React from "react";
import MainSection from "./MainSection";

const personalPages = {
  Velog: {
    name: "Velog",
    img: "https://pbs.twimg.com/profile_images/1228368893321736193/Ov0og7E8_400x400.jpg",
    site: "https://velog.io/@twolove-sarang",
  },
  github: {
    name: "Github",
    img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    site: "https://github.com/twolove-sarang/experiment",
  },
  gmail: {
    name: "Contact to Email",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png",
  },
};
const values = Object.values(personalPages);

export default function Introduce() {
  return (
    <section>
      <p className="mt-6 md:mt-2 ">
        Welcome to Sarang's Laboratory-"Experiment"
      </p>

      <div>
        <MainSection />
        <div
          className="border rounded-t-xl rounded-b-xl overflow-hidden w-80 mt-8 mx-auto
            hover:cursor-pointer
            md:mt-8 md:mx-0"
        >
          {values.map((el, index) => (
            <div
              key={index}
              className="flex items-center py-4 border-b
                  hover:bg-opacity-20 hover:bg-blue
                  transition ease-out duration-200"
            >
              <img
                src={el.img}
                alt="logo"
                className="w-6 rounded-full m-2 mx-10"
              />
              <a href={el.site} target="blank">
                {el.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
