import React from "react";
import LeftDevice from "./LeftDevice";
import RightDevice from "./RightDevice";
import SmallDevice from "./SmallDevice";

export default function PokeDevice({
  catchPoke,
  previousPoke,
  nextPoke,
  monster,
}) {
  return (
    <section className="relative">
      <div className="flex items-end invisible lg:visible absolute">
        <LeftDevice catchPoke={catchPoke} />
        <RightDevice
          monster={monster}
          previousPoke={previousPoke}
          nextPoke={nextPoke}
        />
      </div>

      <div
        className="lg:invisible lg:absolute mt-4 flex justify-center mb-10
      md:mt-0"
      >
        <SmallDevice
          catchPoke={catchPoke}
          monster={monster}
          previousPoke={previousPoke}
          nextPoke={nextPoke}
        />
      </div>
    </section>
  );
}
