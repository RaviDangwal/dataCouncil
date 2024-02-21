import React from "react";

const MediaCard = ({ name, para, img }) => {
  return (
    <div className="m-2 shadow-lg w-[20rem] p-4 flex flex-col items-center">
      <h1 className="text-xl font-semibold">{name}</h1>
      <p>{para}</p>
      <img src={img} alt="" />
    </div>
  );
};

export default MediaCard;
