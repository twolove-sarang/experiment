import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import Poke from "./apicomponent/Poke";
import { PokeContextProvider } from "./apicontext/pokeContext";

export default function API() {
  const queryClient = new QueryClient();
  return (
    <section>
      <p className="text-4xl font-extrabold transition-all hover:translate-x-6 ease-out duration-700 inline-block">
        API
      </p>
      <div className="mt-2">
        ✅ "너로 정했다!" 포켓몬 API를 활용해포켓몬 잡기
      </div>
      <QueryClientProvider client={queryClient}>
        <PokeContextProvider value>
          <Poke />
        </PokeContextProvider>
      </QueryClientProvider>
    </section>
  );
}
