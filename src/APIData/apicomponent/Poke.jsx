import React, { useEffect, useState } from "react";
import PokeDevice from "./PokeDevice";

export default function Poke() {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  const [random, setRandom] = useState(randomNumber);
  const [catchPoke, setCatchPoke] = useState();

  const previousPoke = () => {
    if (catchPoke < 1) {
      return setCatchPoke(1007);
    } else {
      return setCatchPoke((prev) => prev - 1);
    }
  };

  const nextPoke = () => {
    if (catchPoke > 1008) {
      return setCatchPoke(1);
    } else {
      return setCatchPoke((prev) => prev + 1);
    }
  };

  const handleCatch = () => {
    setCatchPoke(random);
    // pokeInformation.mutate({ catchPoke });
  };

  const handleOther = () => {
    setRandom(randomNumber);
    setCatchPoke(null);
  };

  useEffect(() => {
    setCatchPoke(null);
  }, []);

  return (
    <div className="my-4">
      <div className="my-4 flex items-center">
        <div className="text-2xl transform-cpu">🧑‍🎤</div>
        <div className="text-sm">: 포켓몬 마스터가 될꺼야</div>
      </div>

      <div className="flex relative">
        <div className="flex-col p-10 items-center border rounded-xl bg-gray-100 h-fheight mr-4">
          <div className="text-center font-bold text-2xl">
            야생의 포켓몬이 나타났다!
          </div>
          <img
            id="silhouette"
            alt="img"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              random + 1
            }.png`}
          />
          <div className="flex gap-2">
            <button
              className="w-32 h-16 bg-blue text-white font-bold rounded-lg hover:bg-yellow hover:text-black"
              onClick={handleCatch}
            >
              CATCH!
            </button>
            <button
              className="w-32 h-16 bg-blue text-white font-bold rounded-lg hover:bg-yellow hover:text-black"
              onClick={handleOther}
            >
              다른 포켓몬 찾기
            </button>
          </div>
        </div>

        <PokeDevice
          catchPoke={catchPoke}
          previousPoke={previousPoke}
          nextPoke={nextPoke}
        />
      </div>
    </div>
  );
}
