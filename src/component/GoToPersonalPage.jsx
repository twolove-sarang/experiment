import React from "react";
// import ColorChange from "./component/ColorChange";
import { AiFillGithub } from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

export default function GoToPersonalPage({ web, blog, github }) {
  return (
    <>
      <div className="flex-col mt-8 w-96 mx-auto md:mx-0">
        <div className="hover:font-bold flex justify-center items-center gap-2  border p-4 rounded-t-lg hover:bg-slate-400 border-b-0">
          <FaReact />
          <a target="_blank" href={web} rel="noreferrer" className="text-lg">
            웹페이지 바로가기
          </a>
        </div>

        <div className="hover:font-bold flex justify-center items-center gap-2  border p-4 hover:bg-slate-400 border-b-0">
          <FaBloggerB />
          <a target="_blank" href={blog} rel="noreferrer" className="text-lg">
            블로그 바로가기
          </a>
        </div>

        <div className="hover:font-bold flex justify-center items-center gap-2  border p-4 rounded-b-lg hover:bg-slate-400">
          <AiFillGithub />
          <a target="_blank" href={github} rel="noreferrer" className="text-lg">
            깃허브 바로가기
          </a>
        </div>
      </div>
    </>
  );
}
