import React from "react";

const FiftPage = () => {
  return (
    <div className="m-5 sm:mx-10 flex flex-col sm:flex-col sm:items-start sm:ml-36">
      <div className="my-5">
        <h1 className="text-4xl font-bold mt-10">
          Ratings & Reviews by learners
        </h1>
        <p className="mt-4 mb-4">
          Data Council has received honest feedback from our learners around the
          globe.
        </p>
        <div className="flex flex-row w-40">
          <img
            src="https://skill-lync.com/nsimages/googleRating.png"
            alt="Google Rating"
          />
          <img src="data:image/jpeg;base64,..." alt="Review Images" />
        </div>
      </div>

      <div className="w-full sm:w-56 flex sm:flex-row flex-col  mt-5 justify-center sm:justify-start">
        <img
          className="m-2"
          src="https://www.socialproofy.io/wp-content/uploads/2020/06/socialproofy-random-reviews.jpg"
          alt="Review 1"
        />
        <img
          className="m-2"
          src="https://www.socialproofy.io/wp-content/uploads/2020/06/socialproofy-random-reviews.jpg"
          alt="Review 2"
        />
        <img
          className="m-2"
          src="https://www.socialproofy.io/wp-content/uploads/2020/06/socialproofy-random-reviews.jpg"
          alt="Review 3"
        />
        <img
          className="m-2"
          src="https://www.socialproofy.io/wp-content/uploads/2020/06/socialproofy-random-reviews.jpg"
          alt="Review 4"
        />
      </div>
    </div>
  );
};

export default FiftPage;
