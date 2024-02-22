import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-950 text-white mt-10 p-4 flex flex-col md:flex-row justify-evenly">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <img
            className="w-40 ml-20 m-2"
            src="https://www.datacouncil.in/images/logo-light.png"
            alt="Data council"
          />
          <p className="p-2 w-full md:w-6/12">
            Data Council offers industry relevant advanced engineering courses
            for engineering students by partnering with industry experts.
          </p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 mt-4 md:mt-0">
          <ul className="m-4 p-2">
            <h1 className="font-bold pb-2 text-xl">Our Company</h1>
            <li>News & Events</li>
            <li>Careers</li>
            <li>Grievance Redressal</li>
            <li>Terms</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col mt-4 md:mt-0">
          <ul className="m-4 p-2">
            <h1 className="font-bold pb-2 text-xl">Our Branch</h1>
            <li className="font-bold mb-0.5">Pune:</li>
            <li>
              Jijamata Sahakari Bank 2nd floor, karvenagar, pune, Maharashtra
              411052.
            </li>
          </ul>
          <ul className="m-4 p-2">
            <h1 className="font-bold pb-2 text-xl">2nd Branch</h1>
            <li className="font-bold mb-0.5">Nagpur:</li>
            <li>
              TWJ Building 4Floor, Khamla Rd, Nargundkar Layout, Sawarkar Nagar.
            </li>
          </ul>
        </div>

        <div className="flex items-center flex-row justify-center bg-slate-950 p-4 text-white mt-4">
          <h1>© 2023 Data Council. All Rights Reserved.</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
