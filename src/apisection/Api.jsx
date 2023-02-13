import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import OutletHeader from "../component/OutletHeader";
import Poke from "./apicomponent/Poke";
import { PokeContextProvider } from "./apicontext/pokeContext";

export default function API() {
  const queryClient = new QueryClient();
  return (
    <section>
      <OutletHeader
        menuName="API"
        dialogue={`✅"너로 정했다!" 포켓몬 API를 활용해 최고의 포켓몬 잡기`}
      />
      <QueryClientProvider client={queryClient}>
        <PokeContextProvider value>
          <Poke />
        </PokeContextProvider>
      </QueryClientProvider>
    </section>
  );
}
