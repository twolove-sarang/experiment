import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import Poke from "./apicomponent/Poke";
import { PokeContextProvider } from "./apicontext/pokeContext";

export default function API() {
  const queryClient = new QueryClient();
  return (
    <section>
      <p
        className="text-4xl font-extrabold text-center -mt-16 md:mt-12
        md:hover:translate-x-6 ease-out duration-700 transition-all
        md:text-left"
      >
        API
      </p>
      <div className="mt-2 text-center md:text-left">
        ✅<br /> "너로 정했다!" 포켓몬 API를 활용해 <br />
        최고의 포켓몬 잡기
      </div>
      <QueryClientProvider client={queryClient}>
        <PokeContextProvider value>
          <Poke />
        </PokeContextProvider>
      </QueryClientProvider>
    </section>
  );
}
