import React from "react";
import Introduce from "../component/Introduce";
import ProgramingSkill from "../component/ProgramingSkill";

export default function MainPage() {
  return (
    <div className="text-center -mt-20 md:text-left md:mt-0">
      <h1 className="text-2xl font-bold">프론트엔드 연구, 기록일지</h1>
      <p className="text-sm mt-2">지독한 기록병이 있습니다 ☺️</p>
      <div className="lg:flex lg:gap-16 lg:items-start">
        <Introduce />
        <ProgramingSkill />
      </div>
    </div>
  );
}
