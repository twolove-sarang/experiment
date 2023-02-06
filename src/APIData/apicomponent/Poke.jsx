import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";

export default function Poke() {
  const pokemon = async () => {
    return axios
      .get("https://pokeapi.co/api/v2/ability/130/")
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
      포켓몬 마스터가 될꺼야 🤩
      <div>{monster && monster.names.map((el) => <div>{el.name}</div>)}</div>
    </div>
  );
}
