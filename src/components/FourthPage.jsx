import React from "react";
import Cards from "./Cards";

const FourthPage = () => {
  const courseList = [
    {
      img: "https://res.cloudinary.com/epowerx-learning-technologies-pvt-ltd/image/fetch/f_auto,c_limit,w_1920,q_auto/https://d28ljev2bhqcfz.cloudfront.net/maincourse/thumb/advanced-driver-assistance-system-matlab-simulink_1612262650.jpg",
      rating: "⭐⭐⭐⭐ 4.8",
      para: "Introduction to Model-Based Development using MATLAB and Simulink.",
      knw: "Know More!",
    },
    {
      img: "https://res.cloudinary.com/epowerx-learning-technologies-pvt-ltd/image/fetch/f_auto,c_limit,w_1920,q_auto/https://d28ljev2bhqcfz.cloudfront.net/maincourse/thumb/masters-design_1636551143.jpg",
      rating: "⭐⭐⭐⭐ 4.0",
      para: "Post Graduate Program in CAD",
    },
    {
      img: "https://res.cloudinary.com/epowerx-learning-technologies-pvt-ltd/image/fetch/f_auto,c_limit,w_1920,q_auto/https://d28ljev2bhqcfz.cloudfront.net/maincourse/thumb/masters-cfd_1636550988.jpg",
      rating: "⭐⭐⭐⭐ 4.8",
      para: "Post Graduate Program in Computational Fluid Dynamics",
    },
    {
      img: "https://res.cloudinary.com/epowerx-learning-technologies-pvt-ltd/image/fetch/f_auto,c_limit,w_1920,q_auto/https://d28ljev2bhqcfz.cloudfront.net/maincourse/thumb/masters-car-design_1636605172.png",
      rating: "⭐⭐⭐⭐ 4.8",
      para: "Post Graduate Program in Complete Passenger Car Design & Product Development",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-950 via-gray-800 to-gray-900 text-white flex flex-col items-center mt-20 py-20">
      <div>
        <h1 className="text-4xl font-bold mt-10">Recommended Courses</h1>
      </div>
      <div className=" flex flex-row justify-evenly mt-6 ">
        <ul className="m-6">
          <h1 className="text-xl">Choose your domain</h1>
          <li>
            <button className="bg-green-600 shadow-lg text-white hover:bg-gray-950 hover:text-white p-3 px-16  rounded-md cursor-pointer transition-colors duration-300 ease-in-out font-bold tetx-3xl mt-4 w-56">
              Mechanical
            </button>
          </li>
          <li>
            <button className="bg-green-600 shadow-lg text-white hover:bg-gray-950 hover:text-white p-3 px-16  rounded-md cursor-pointer transition-colors duration-300 ease-in-out font-bold tetx-3xl mt-4 w-56">
              Civil
            </button>
          </li>
          <li>
            <button className="bg-green-600 shadow-lg text-white hover:bg-gray-950 hover:text-white p-3 px-16  rounded-md cursor-pointer transition-colors duration-300 ease-in-out font-bold tetx-3xl mt-4 w-56">
              CS
            </button>
          </li>
          <li>
            <button className="bg-green-600 shadow-lg text-white hover:bg-gray-950 hover:text-white p-3 px-16  rounded-md cursor-pointer transition-colors duration-300 ease-in-out font-bold tetx-3xl mt-4 w-56">
              Electronics
            </button>
          </li>
        </ul>
        <div className="flex flex-wrap mt-14">
          {courseList.map((li) => (
            <Cards
              key={li.name}
              img={li.img}
              rating={li.rating}
              para={li.para}
              btn={li.knw}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
