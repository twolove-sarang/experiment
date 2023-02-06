import axios from "axios";

export const pokeName = async ({ catchPoke }) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${catchPoke}`)
    .then((res) => res.data);
};
