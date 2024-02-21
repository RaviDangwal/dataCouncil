import React from "react";
import { LOGO } from "../utils/constants";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-950 flex flex-row justify-evenly text-white mt-20 ">
        <div>
          <img className="w-40 ml-20 bg-gray-100 m-2" src={LOGO} alt="" />
          <p className="p-2 w-7/12 ml-6">
            Data Council offers industry relevant advanced engineering courses
            for engineering students by partnering with industry experts.
          </p>
        </div>
        <div>
          <ul className="m-4 p-2">
            <h1 className="font-bold pb-2">Our Company</h1>
            <li>News & Events</li>
            <li>Careers</li>
            <li>Grievance Redressal</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center flex-row justify-center bg-slate-950 p-4 text-white">
        <h1>© 2023 Data Council. All Rights Reserved.</h1>
      </div>
    </>
  );
};

export default Footer;
