import React from "react";
import spaceship from "./spaceship.svg";
import Marquee from "react-fast-marquee";

function LandingPage() {
  return (
    <div className="flex h-screen max-md:bg-spaceship">
      <img
        src={spaceship}
        alt="spaceship"
        className="h-screen w-auto hidden md:block"
      />
      <div className="flex flex-col justify-center bruno-ace w-screen px-4 md:px-0 md:pr-4 md:w-full">
        <div className="h-full flex items-center">
          <h1 className="text-[#D9D9D9] text-7xl md:text-9xl">
            KISHU RAJ TYAGI
          </h1>
        </div>
        <div className="flex w-full mb-4 rounded-full bg-[#42424245] py-6 px-2">
          <Marquee className="text-2xl md:text-3xl font-extralight">
            &nbsp;GRAPHIC DESIGNER&nbsp;*&nbsp;UI/UX DESIGNER&nbsp;*&nbsp;3D
            ARTIST&nbsp;*
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
