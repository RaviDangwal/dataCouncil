import React from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between shadow-lg sm:w-full w-screen ">
      <div className="">
        <img
          className="w-24 ml-4 cursor-pointer "
          src={LOGO}
          alt="Data Council"
        />
      </div>
      <div className=" sm:block hidden">
        <ul className="flex flex-row ">
          <li className=" m-2 bg-slate-950 shadow-lg text-white hover:bg-white hover:text-black p-3 px-6 rounded-md cursor-pointer transition-colors duration-300 ease-in-out">
            Courses
          </li>
          <li className="p-3 m-2 cursor-pointer hover:text-blue-600 hover:underline">
            Executive Programs
          </li>
          <li className="p-3 m-2 cursor-pointer hover:text-blue-600 hover:underline">
            Workshops
          </li>
          <li className="p-3 m-2 cursor-pointer hover:text-blue-600 hover:underline">
            For Business
          </li>
          <li className="p-3 m-2 cursor-pointer hover:text-blue-600 hover:underline">
            Success Stories
          </li>
          <li className="p-3 m-2 cursor-pointer hover:text-blue-600 hover:underline">
            More
          </li>
          <li className="m-3 sm:block hidden">
            <input
              type="text"
              placeholder="search"
              className="bg-gray-100 rounded-l-full p-2"
            />
            <button className="bg-gray-100 rounded-r-full p-2">🔍</button>
          </li>
        </ul>
      </div>
      <div>
        <button className="mr-6 bg-slate-950 shadow-lg text-white sm:hover:bg-white sm:hover:text-black p-2 rounded-md transition-colors duration-300 ease-in-out px-4">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
