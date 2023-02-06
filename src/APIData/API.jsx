import React from "react";
import Weather from "./apicomponent/Poke";

export default function API() {
  return (
    <section>
      <p className="text-4xl font-extrabold transition-all hover:translate-x-6 ease-out duration-700 inline-block">
        API
      </p>
      <div className="mt-2">
        ✅ "너로 정했다!" 포켓몬 API를 활용해포켓몬 찾기
      </div>
      <Weather />
    </section>
  );
}
