import React from "react";
import Koin from "./UIUXDesigns/Koin.svg";
import Nebula from "./UIUXDesigns/Nebula.svg"
import Reverr from "./UIUXDesigns/Reverr.svg"
import Polarr from "./UIUXDesigns/Polarr.svg"
import CoinNest from "./UIUXDesigns/CoinNest.svg"
import CentsCDN from "./UIUXDesigns/5CentsCDN.svg"
import Card from "./Card";

function UXDesign() {
  const works = [
    {
      name: "Koin",
      img: Koin,
    },
    {
        name: "Nebula.Ai",
        img: Nebula
    },
    {
        name: "Reverr",
        img: Reverr
    },
    {
        name: "Polarr",
        img: Polarr
    },
    {
        name: "CoinNest",
        img: CoinNest
    },
    {
        name: "5CentsCDN",
        img: CentsCDN
    }
  ];
  return (
    <div className="grid md:gap-12 gap-y-10 md:grid-cols-3 bruno-ace my-12 md:px-12">
      {works.map((work, i) => {
        return <Card work={work} />;
      })}
    </div>
  );
}

export default UXDesign;
