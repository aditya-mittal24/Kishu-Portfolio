import React from "react";

function Navbar() {
  return (
    <div className="navbar w-full max-w-[1600px] fixed top-0 bg-black bg-opacity-40 backdrop-blur-sm backdrop-opacity-70">
      <div className="flex items-center justify-around py-4 text-[#D9D9D9]">
        <div className="logo flex w-auto">
          <p className="text-2xl md:text-3xl">Logo</p>
        </div>
        <div className="flex items-center justify-between  gap-x-4 md:gap-x-16">
          <p className="text-xl">item</p>
          <p className="text-xl">item</p>
          <p className="text-xl">item</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
