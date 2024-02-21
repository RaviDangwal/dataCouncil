import React from "react";
import { TICK_MARK, WORKSPACE_IMG } from "../utils/constants";

const LandingPage = () => {
  return (
    <div className=" flex flex-col items-center mt-20 ">
      <div className="grid grid-rows-12 relative right-96">
        <button className="p-2 m-2 rounded-full bg-teal-100  row-span-2">
          <span
            className=" bg-white
           text-black p-1.5 rounded-full"
          >
            New!
          </span>{" "}
          Jobs from Top Companies
        </button>
        <div>
          <img
            src={WORKSPACE_IMG}
            alt=""
            className="absolute left-[38rem] w-96 h-72 rounded-lg top-28"
          />
        </div>
        <div className="row-span-8">
          <h1 className="text-4xl font-bold w-96">
            Get Job-Ready with Our Engineering Courses
          </h1>
          <p>Engineering courses with Job Assistance!</p>
          <ol className="mt-4">
            <li>
              <img src={TICK_MARK} className="w-5" alt="" />
              2000+ Placements at Skill-Lync
            </li>
            <li>
              <img src={TICK_MARK} alt="" className="w-5" />
              Highest Salary of 14 Lakhs p.a.
            </li>
            <li>
              <img src={TICK_MARK} alt="" className="w-5" />
              500+ Companies Hiring
            </li>
          </ol>
        </div>
      </div>
      <div className="  bg-gray-100 rounded-xl m-5 p-16 w-3/4">
        <h1 className="text-3xl font-bold ">Book a Free Demo, now!</h1>
        <p className="mt-2">
          Experience the quality of our course content firsthand with a demo
          session, Live!
        </p>
        <div className="grid gap-2 grid-cols-12">
          <input
            type="text"
            placeholder="Emial Address"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 col-span-5"
          />
          <input
            type="text"
            placeholder="Mobile No"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 col-span-5"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 col-span-2">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
