import React from "react";

export default function ProgramingSkill() {
  return (
    <section className="mb-20">
      <p className="text-lg font-bold mt-10">Programing Skill</p>
      <p className="text-sm">Crazy about REACT 🙃</p>
      <div className="flex items-center justify-center">
        <div>
          <div className="my-4 font-semibold">JavaScript</div>
          <div className="my-4 font-semibold animate-bounce">React</div>
          <div className="my-4 font-semibold">CSS</div>
          <div className="my-4 font-semibold">Git</div>
          <div className="my-4 font-semibold">Node JS</div>
        </div>
        <div className="ml-4 -mt-5">
          <div className="w-52 md:w-64 h-4 rounded-lg bg-blue my-6"></div>
          <div className="w-64 md:w-80 h-4 rounded-lg bg-blue my-6"></div>
          <div className="w-64 md:w-80 h-4 rounded-lg bg-blue my-6"></div>
          <div className="w-24 h-4 rounded-lg bg-blue my-6"></div>
          <div className="flex items-center justify-between">
            <div className="w-8 h-4 rounded-lg bg-blue"></div>
            <p className="text-sm">...now studying...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
