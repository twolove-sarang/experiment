import React from "react";

const personalPages = {
  velog: {
    name: "Velog",
    img: "https://pbs.twimg.com/profile_images/1228368893321736193/Ov0og7E8_400x400.jpg",
  },
  github: {
    name: "Github",
    img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  gmail: {
    name: "Email",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png",
  },
};
const values = Object.values(personalPages);

export default function MainPage() {
  return (
    <div>
      <div className="text-2xl font-bold">프론트엔드 연구, 기록일지</div>
      <div className="text-sm mt-2">지독한 기록병이 있습니다 ☺️</div>
      <br />
      <div>Welcome to Sarang's Laboratory-"Experiment"</div>
      <div>⬅️ Press the menu button and enjoy this project.</div>
      <br />
      <div>
        <div className="font-bold">Please come over to my pages 🤟</div>
        <div className="border rounded-t-xl rounded-b-xl overflow-hidden mt-10 hover:cursor-pointer w-80">
          {values.map((el, index) => (
            <div
              key={index}
              className="flex items-center py-4 border-b hover:bg-opacity-20 hover:bg-blue
               transition ease-out duration-200"
            >
              <img
                src={el.img}
                alt="logo"
                className="w-6 rounded-full m-2 mx-10"
              />
              <div className="text-md font-normal">{el.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
