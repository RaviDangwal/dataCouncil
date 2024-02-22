import React from "react";

const Cards = ({ name, img, para, rating }) => {
  return (
    <div className="w-56  m-4 p-2 flex flex-col items-center rounded-lg justify-between bg-slate-100 shadow-xl">
      <img src={img} alt="" className="w-24 " />
      <h1 className="text-black text-2xl font-bold">{name}</h1>
      <p className="text-black">{para}</p>
      <p className="text-black text-left">{rating}</p>
      <p></p>
    </div>
  );
};

export default Cards;
