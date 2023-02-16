import React from "react";
import OutletHeader from "../component/OutletHeader";
import ColorChange from "./component/ColorChange";
import { AiFillGithub } from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

export default function Design() {
  return (
    <div className="flex-col">
      <OutletHeader
        menuName="Hex Color Palette"
        dialogue={`✅ 컬러로 고민하는 디자이너를 위한 페이지`}
      />
      <div className="flex-col mt-8 w-96 mx-auto md:mx-0">
        <div className="hover:font-bold flex justify-center items-center gap-2  border p-4 rounded-t-lg hover:bg-slate-400 border-b-0">
          <FaReact />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://csscolorvariation.netlify.app/"
            className="text-lg"
          >
            웹페이지 바로가기
          </a>
        </div>

        <div className="hover:font-bold flex justify-center items-center gap-2  border p-4 hover:bg-slate-400 border-b-0">
          <FaBloggerB />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://csscolorvariation.netlify.app/"
            className="text-lg"
          >
            블로그 바로가기
          </a>
        </div>

        <div className="hover:font-bold flex justify-center items-center gap-2  border p-4 rounded-b-lg hover:bg-slate-400">
          <AiFillGithub />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/twolove-sarang/cssColor-ariation"
            className="text-lg"
          >
            깃허브 바로가기
          </a>
        </div>
      </div>

      <div className="lg:flex gap-12 md:items-start">
        <div className="mt-10">
          <div className="text-center text-lg font-bold">
            버튼을 눌러보세요 👆
          </div>
          <ColorChange />
        </div>

        <div className="md:mt-10">
          <div className="text-center text-lg font-bold">웹페이지 view</div>
          <div className="w-96 mx-auto">
            <img
              src="/img/screenshot01.png"
              alt="color variation"
              className="w-96 mx-auto mt-10 mb-20 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
