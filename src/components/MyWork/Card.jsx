import React from "react";

function Card(props) {
  const work = props.work;
  return (
    <div className="bg-[#131313] text-center rounded-xl cursor-pointer">
      <h2 className="md:text-2xl text-xl py-8">{work.name}</h2>
      <img src={work.img} alt={work.name} />
    </div>
  );
}

export default Card;
