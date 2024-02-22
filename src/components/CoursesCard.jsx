import React from "react";

const CoursesCard = ({ name, para, dura, img }) => {
  return (
    <div className="w-[340px]   rounded-lg shadow-2xl hover:scale-110 transition duration-300 p-4 flex flex-col justify-evenly m-6 cursor-pointer">
      <img className="my-2 w-[308px] h-[240px]" src={img} alt="" />
      <h1 className="my-2 text-blue-500">Language</h1>
      <h1 className="my-2 font-bold text-lg">{name}</h1>
      <p className="my-2">{para}</p>
      <p className="my-2 text-blue-500 hover:text-blue-700">Read More</p>
      <p className="my-2 text-red-400">⏲ {dura}</p>
    </div>
  );
};

export default CoursesCard;
