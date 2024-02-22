import React from "react";
import { COMPANIES_LIST } from "../utils/constants";

const SecondPg = () => {
  return (
    <div className="flex sm:flex-row sm:justify-around flex-col ">
      <div className="m-16 ">
        <h1 className="text-4xl font-semibold">
          <span className="text-blue-700">Placement</span> Opportunities
        </h1>
        <p className=" w-96 mt-5">
          Data Council supports you to get placed in top companies,whether
          you're trying to start a new career or change your existing one.
        </p>
        <button className="bg-green-600 shadow-lg text-white hover:bg-gray-950 hover:text-white p-3 px-16  rounded-md cursor-pointer transition-colors duration-300 ease-in-out font-bold tetx-3xl mt-4 ">
          Hiring Companies
        </button>
      </div>
      <div className="sm:w-[36rem]">
        <img src={COMPANIES_LIST} alt="company" />
      </div>
    </div>
  );
};

export default SecondPg;
