import { createContext, useContext, useState } from "react";

const PokeContext = createContext();

export function PokeContextProvider({ children }) {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  const [random, setRandom] = useState(randomNumber);
  const [catchPoke, setCatchPoke] = useState();

  const handleCatch = () => {
    setCatchPoke(random);
  };

  const handleOther = () => {
    setRandom(randomNumber);
    setCatchPoke(null);
  };

  return (
    <PokeContext.Provider value={{ catchPoke, handleCatch, handleOther }}>
      {children}
    </PokeContext.Provider>
  );
}

export function usePokeContext() {
  return useContext(PokeContext);
}
