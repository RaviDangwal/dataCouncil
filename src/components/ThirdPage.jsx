import React from "react";
import Cards from "./Cards";

const ThirdPage = () => {
  const dataList = [
    {
      img: "https://skill-lync.com/nsimages/svg/select_icon.webp",
      rating: "Enroll",
      para: "Enroll in a PG program, it takes 8 to 12 months to complete it.",
    },
    {
      img: "https://skill-lync.com/nsimages/svg/book_icon.webp",
      rating: "Learn",
      para: "Learn from pre-recorded videos and get support when you are stuck.",
    },
    {
      img: "https://skill-lync.com/nsimages/svg/tick_icon.webp",
      rating: "Finish",
      para: "Build your Data Council profile by completing the projects.",
    },
    {
      img: "https://skill-lync.com/nsimages/svg/bag_icon.webp",
      rating: "Get Hired",
      para: "Complete the course, pass the assessments & get the interviews!",
    },
  ];
  return (
    <div className="  flex flex-col items-center mt-20 ">
      <div className="">
        <h1 className="text-4xl font-bold mt-10">How to get there?</h1>
      </div>
      <div className="flex sm:flex-row flex-col mt-10 mb-10 ">
        {dataList.map((da) => (
          <Cards name={da.name} key={da.name} img={da.img} para={da.para} />
        ))}
      </div>
    </div>
  );
};

export default ThirdPage;
