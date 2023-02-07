import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PokeDevice from "./PokeDevice";

export default function Poke() {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  const [random, setRandom] = useState(randomNumber);
  const [catchPoke, setCatchPoke] = useState();
  const [pokeHistory, setPokeHistory] = useState([]);

  const previousPoke = () => {
    if (catchPoke < 1) {
      return setCatchPoke(1007);
    } else {
      setCatchPoke((prev) => prev - 1);
    }
  };

  const nextPoke = () => {
    if (catchPoke > 1008) {
      return setCatchPoke(1);
    } else {
      return setCatchPoke((prev) => prev + 1);
    }
  };

  async function pokeName(randomNum) {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomNum + 1}`)
      .then((res) => res.data);
  }
  const { data: monster } = useQuery(["monster", catchPoke], () =>
    pokeName(catchPoke)
  );

  const handleCatch = () => {
    setCatchPoke(random);
    pokeName(random);
    setPokeHistory([...pokeHistory, random]);
  };

  const handleRelease = () => {
    setPokeHistory([]);
  };
  const handleOther = () => {
    setRandom(randomNumber);
    // setCatchPoke(null);
  };

  useEffect(() => {
    setCatchPoke(null);
  }, []);

  return (
    <div className="my-4">
      <div className="my-4 flex items-center gap-2">
        <div className="text-2xl transform-cpu">🧑‍🎤</div>
        {pokeHistory.length === 0 ? (
          <div className="text-lg">: 포켓몬 마스터가 될꺼야</div>
        ) : (
          <>
            {pokeHistory.length <= 10 ? (
              pokeHistory.map((el) => (
                <div className="inline-block w-8 mt-2">
                  <img
                    alt="img"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      el + 1
                    }.png`}
                  />
                </div>
              ))
            ) : (
              <div className="flex">
                <p id="font_galmuri">
                  너무 많이 잡았어! 포켓몬 생태계가 위험해지니까 조금 풀어주자
                </p>
                <button
                  onClick={handleRelease}
                  className="w-20 ml-2 bg-blue text-white rounded-lg font-bold"
                >
                  놓아주기
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <div className="flex relative">
        <div className="flex-col p-10 items-center border rounded-xl bg-gray-100 h-fheight mr-4">
          <div className="text-center font-bold text-xl" id="font_galmuri">
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
              className="w-32 h-16 bg-blue text-white font-bold rounded-lg hover:bg-yellow hover:text-black text-sm"
              onClick={handleCatch}
              id="font_galmuri"
            >
              CATCH!
            </button>
            <button
              className="w-32 h-16 bg-blue text-white font-bold rounded-lg hover:bg-yellow hover:text-black text-sm"
              onClick={handleOther}
              id="font_galmuri"
            >
              다른 포켓몬 찾기
            </button>
          </div>
        </div>

        <PokeDevice
          catchPoke={catchPoke}
          previousPoke={previousPoke}
          nextPoke={nextPoke}
          monster={monster}
        />
      </div>
    </div>
  );
}
