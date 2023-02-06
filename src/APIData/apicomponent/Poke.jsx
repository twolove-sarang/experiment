import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PokeDevice from "./PokeDevice";

export default function Poke() {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  const [random, setRandom] = useState(randomNumber);
  const [catchPoke, setCatchPoke] = useState();
  const handleClick = () => {
    setCatchPoke(random);
  };

  const handleOther = () => {
    setRandom(randomNumber);
    setCatchPoke(24);
  };

  const pokemon = async () => {
    return axios
      .get("https://pokeapi.co/api/v2/ability")
      .then((res) => res.data);
  };

  const {
    isLoading,
    error,
    data: monster,
  } = useQuery(
    { queryKey: ["monster"], queryFn: () => pokemon() },
    { staleTime: 1000 }
  );

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>에러야 다시해~</p>;

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
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              random + 1
            }.png`}
          />
          <div className="flex gap-2">
            <button
              className="w-32 h-16 bg-blue text-white font-bold rounded-lg hover:bg-yellow hover:text-black"
              onClick={handleClick}
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

        <PokeDevice catchPoke={catchPoke} />
      </div>
    </div>
  );
}
