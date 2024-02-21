import React from "react";
import MediaCard from "./MediaCard";

const SixthPage = () => {
  const mediaList = [
    {
      name: "Edtech startup Data Council builds EV to help students...",
      para: "Engineering edtech startup Data Council on Tuesday said it has built an in-house electric vehicle to help its students gain insights into the future of...",
      url: "https://d28ljev2bhqcfz.cloudfront.net/news/pages/thumbnail/Economic_Times_1650448665.png",
    },
    {
      name: "Edtech startup Data Council builds EV to help students...",
      para: "Engineering edtech startup Data Council on Tuesday said it has built an in-house electric vehicle to help its students gain insights into the future of...",
      url: "https://d28ljev2bhqcfz.cloudfront.net/news/pages/thumbnail/BWeduc_1649682531.jpg",
    },
    {
      name: "Edtech startup Data Council builds EV to help students...",
      para: "Engineering edtech startup Data Council on Tuesday said it has built an in-house electric vehicle to help its students gain insights into the future of...",
      url: "https://d28ljev2bhqcfz.cloudfront.net/news/pages/thumbnail/Easyshiksha11_1649681716.jpg",
    },
  ];
  return (
    <div>
      <div className="m-4 ml-36 mt-10">
        <h1 className="font-semibold">Skill-Lync in News </h1>
        <h1 className="font-bold text-4xl">Media Spotlight</h1>
      </div>
      <div className="flex flex-row justify-center mt-10">
        {mediaList.map((li) => (
          <MediaCard key={li.name} name={li.name} para={li.para} img={li.url} />
        ))}
      </div>
    </div>
  );
};

export default SixthPage;
