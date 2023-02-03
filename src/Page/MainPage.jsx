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
console.log("value", values);
export default function MainPage() {
  return (
    <div>
      <div>Welcome to Sarang's Laboratory-"Experiment"</div>
      <div>Press the menu button and enjoy this project.</div>
      <br />
      <div>
        <div className="font-bold">Please come over to my pages 🤟</div>
        <div className="border rounded-t-xl rounded-b-xl overflow-hidden mt-10">
          {values.map((el) => (
            <div
              className="flex items-center py-4 border-b
            hover:bg-blue transition ease-out duration-200"
            >
              <img
                src={el.img}
                alt="image"
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
