import React, { useEffect, useState } from "react";

export default function PokeDevice({ catchPoke }) {
  const [pokeNumber, setPokeNumber] = useState();

  const previousPoke = () => {
    if (pokeNumber < 1) {
      return setPokeNumber(1008);
    } else {
      setPokeNumber((catchPoke) => catchPoke - 1);
    }
  };
  const nextPoke = () => {
    if (pokeNumber > 1008) {
      return setPokeNumber(1);
    } else {
      setPokeNumber((catchPoke) => catchPoke + 1);
    }
  };

  return (
    <section className="flex items-end">
      {/* 왼쪽 디바이스 */}
      <div className="w-72 h-fheight rounded-md bg-device relative flex flex-col items-center">
        {/* 상단 버튼 */}
        <>
          <div className="w-16 h-16 rounded-full bg-slate-200 absolute top-4 left-6"></div>
          <div className="w-12 h-12 rounded-full bg-blue absolute top-6 left-8"></div>
          <div className="w-2 h-2 rounded-full bg-rose-700 absolute top-4 left-24"></div>
          <div className="w-2 h-2 rounded-full bg-amber-500 absolute top-4 left-28"></div>
          <div className="w-2 h-2 rounded-full bg-green-900 absolute top-4 left-32"></div>
        </>
        {/* 화면 */}
        <div className="flex flex-col items-center justify-center absolute top-48">
          <div className="w-2 h-2 rounded-full absolute bg-black"></div>
          <div className="w-56 h-44 rounded-md rounded-bl-3xl bg-slate-200 absolute"></div>
          <div className="w-40 h-28 rounded-md bg-black absolute flex items-center">
            {
              <img
                className="mx-auto w-40"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNumber}.png`}
              />
            }
          </div>
        </div>
        {/* 하단 버튼 */}
        <div className="absolute top-80">
          <div className="w-8 h-8 rounded-full bg-black absolute -left-28"></div>
          <div className="absolute -left-14">
            <div className="flex justify-between gap-4">
              <div className="w-8 h-2 rounded-full bg-rose-700"></div>
              <div className="w-8 h-2 rounded-full bg-blue"></div>
            </div>
            <div className="w-20 h-12 rounded-sm bg-green-400 absolute top-6 flex items-center">
              <div className="w-20 text-center font-bold text-3xl">
                {pokeNumber}
              </div>
            </div>
          </div>
          <div className="absolute">
            <div className="flex absolute top-6 left-10">
              <div className="w-6 h-6 bg-black"></div>
              <div className="w-6 h-6 bg-black"></div>
              <div className="w-6 h-6 bg-black"></div>
            </div>
            <div className="flex-col absolute left-16">
              <div className="w-6 h-6 bg-black"></div>
              <div className="w-6 h-6 bg-black"></div>
              <div className="w-6 h-6 bg-black"></div>
            </div>
          </div>
        </div>
      </div>
      {/* 오른쪽 디바이스 */}

      <div className="w-72 h-96 rounded-md bg-device relative flex flex-col items-center">
        {/* 이름 */}
        <div className="w-52 h-16 rounded-md bg-black absolute top-16">
          <div className="text-white text-center">피카츄</div>
          <div className="text-white text-center">(이)가 잡혔다!</div>
        </div>
        <div className="w-52 h-16 rounded-md bg-blue absolute top-36"></div>

        <div className="flex justify-between w-52 absolute top-36">
          <div className="w-1 h-16 rounded-full bg-blue"></div>
          <div className="w-1 h-16 rounded-full bg-blue"></div>
        </div>

        {/* 버튼 */}
        <div className="flex absolute top-60 gap-10">
          <div className="w-24 h-12 rounded-md bg-slate-200"></div>
          <div className="flex-col gap-2">
            <div className="flex gap-2">
              <div className="w-8 h-2 rounded-full bg-black"></div>
              <div className="w-8 h-2 rounded-full bg-black"></div>
            </div>
            <div className="w-8 h-8 rounded-full bg-yellow absolute top-4 left-44"></div>
          </div>
        </div>

        {/* 하단버튼 */}
        <div className="flex absolute top-80 justify-between gap-4">
          <button
            onClick={previousPoke}
            className="w-24 h-8 rounded-md bg-black top-80"
          >
            <p className="text-white text-2xl">⬅️</p>
          </button>
          <button
            onClick={nextPoke}
            className="w-24 h-8 rounded-md bg-black top-80"
          >
            <p className="text-white text-2xl">➡️</p>
          </button>
        </div>
      </div>
    </section>
  );
}
