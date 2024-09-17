import React, { useState } from "react";
import Underline from "./Underline.svg";
import UXDesign from "./UXDesign";
import Design3D from "./3DDesign";
import GraphicDesign from "./GraphicDesign";
import { IoMdArrowDropdown } from "react-icons/io";

function MyWork() {
  const sections = [
    {
      name: "UI/UX Design",
      value: 0,
    },
    {
      name: "3D Design",
      value: 1,
    },
    {
      name: "Graphic Design",
      value: 2,
    },
  ];
  const [section, setSection] = useState(1);
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center md:px-40 px-24 my-20">
      <div>
        <h1 className="text-5xl streamster">My WORK</h1>
        <img src={Underline} alt="" />
      </div>
      <div className="md:hidden my-10">
        <span
          onClick={() => {
            setOpen(!isOpen);
          }}
          className="bg-[#131313] flex justify-between items-center py-6 px-4 w-60 text-xl rounded-lg outline outline-2 outline-white cursor-pointer"
        >
          {section === 0 && "UI/UX Design"}
          {section === 1 && "3D Design"}
          {section === 2 && "Graphic Design"}
          <IoMdArrowDropdown />
        </span>
        {isOpen && (
          <ul className="bg-[#131313] w-60 text-xl rounded-lg absolute">
            {sections.map((sec, i) => {
              return (
                <li
                  onClick={() => {
                    setSection(sec.value);
                    setOpen(false);
                  }}
                  className="py-6 px-4"
                >
                  {sec.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="hidden md:grid grid-cols-3 my-10 w-full bruno-ace place-items-center">
        {sections.map((sec, i) => {
          return (
            <button
              onClick={() => {
                setSection(sec.value);
              }}
              className={
                section === sec.value
                  ? "bg-[#131313] py-6 w-60 text-xl rounded-lg outline outline-2 outline-white"
                  : "bg-[#131313] py-6 w-60 text-xl rounded-lg"
              }
            >
              {sec.name}
            </button>
          );
        })}
      </div>
      {section === 0 && <UXDesign />}
      {section === 1 && <Design3D />}
      {section === 2 && <GraphicDesign />}
    </div>
  );
}

export default MyWork;
