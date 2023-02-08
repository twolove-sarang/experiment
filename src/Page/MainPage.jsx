import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

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

export default function MainPage() {
  return (
    <div className="text-center -mt-20 md:text-left md:mt-8">
      <h1 className="text-2xl font-bold">프론트엔드 연구, 기록일지</h1>
      <p className="text-sm mt-2">지독한 기록병이 있습니다 ☺️</p>
      <br />
      <div className="lg:flex lg:gap-16 lg:items-end">
        <section>
          <p>Welcome to Sarang's Laboratory-"Experiment"</p>

          <div className="flex items-center font-bold justify-center md:invisible">
            <AiOutlineArrowUp />
            <p>Press the menu button and enjoy this project.</p>
          </div>

          <div>
            <p
              className="flex items-center font-bold justify-center invisible
            md:justify-start md:visible md:-mt-6 lg:w-96"
            >
              <AiOutlineArrowLeft />
              Press the menu button and enjoy this project.
            </p>
          </div>

          <br />
          <div className="inline-block mx-auto">
            <div className="items-center md:invisible">
              <p className="text-4xl animate-[wiggle_1s_ease-in-out_infinite]">
                🤟
              </p>
              <p className="font-bold mt-4">Please come over to my pages</p>
            </div>

            <div
              className="flex items-center invisible
              md:visible md:-mt-20"
            >
              <p className="font-bold">Please come over to my pages</p>
              <p className="text-2xl animate-[wiggle_1s_ease-in-out_infinite]">
                🤟
              </p>
            </div>

            <div className="border rounded-t-xl rounded-b-xl overflow-hidden hover:cursor-pointer w-80 md:mt-8">
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

        <section>
          <p className="text-lg font-bold mt-10">Programing Skill</p>
          <p className="text-sm">Crazy about REACT 🙃</p>
          <div className="flex items-center justify-center mt-10">
            <div>
              <div className="my-4 font-semibold">JavaScript</div>
              <div className="my-4 font-semibold animate-bounce">React</div>
              <div className="my-4 font-semibold">CSS</div>
              <div className="my-4 font-semibold">Git</div>
              <div className="my-4 font-semibold">Node JS</div>
            </div>
            <div className="ml-4 -mt-5">
              <div className="w-64 h-4 rounded-lg bg-blue my-6"></div>
              <div className="w-80 h-4 rounded-lg bg-blue my-6"></div>
              <div className="w-80 h-4 rounded-lg bg-blue my-6"></div>
              <div className="w-24 h-4 rounded-lg bg-blue my-6"></div>
              <div className="flex items-center justify-between">
                <div className="w-8 h-4 rounded-lg bg-blue"></div>
                <p className="text-sm">...now studying...</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
