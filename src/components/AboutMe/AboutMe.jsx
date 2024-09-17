import React from "react";
import Marquee from "react-fast-marquee";
import BlackHole from "./blackhole.svg";
import Underline from "./Underline.svg";
import Picture from "./Picture.svg";

function AboutMe() {
  return (
    <div className="flex flex-col">
      <div className="grid px-4 md:grid-cols-2 gap-x-4 md:my-2 my-6">
        <div className="hidden md:block">
          <div className="flex bruno-ace mb-4 rounded-full bg-[#42424245] py-4 px-2 mr-12">
            <Marquee className="text-3xl font-extralight">
              &nbsp;UI/UX DESIGNER&nbsp;*&nbsp;3D ARTIST&nbsp;*&nbsp;GRAPHIC
              DESIGNER&nbsp;*
            </Marquee>
          </div>
        </div>
        <div className="w-full">
          <img className="w-auto" src={BlackHole} alt="blackhole" />
        </div>
      </div>
      <div className="px-4 grid md:grid-cols-6">
        <div className="flex flex-col items-center col-span-3">
          <div>
            <h1 className="streamster text-6xl">About ME</h1>
            <img src={Underline} alt="" />
          </div>
          <img className="h-[70%] my-4" src={Picture} alt="" />
        </div>
        <div className="bahnschrift col-span-2 text-2xl font-normal flex flex-col justify-center">
          <p className="font-bold text-4xl leading-10">HI!!</p>
          <p>
            I'm Kishu Raj Tyagi, a UX Designer and 3D Artist with a passion for
            creating impactful visual experiences.
          </p>
          <p className="font-light">
            <span className="font-bold text-4xl">Ever since </span>I started,
            I've been driven by the desire to blend creativity with
            functionality, whether it's revamping company designs or crafting
            intuitive user interfaces.
          </p>
          <p className="font-light">
            <span className="font-bold text-4xl">I live to </span>explore
            innovative design solutions that not only solve problems but also
            inspire and engage users.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
