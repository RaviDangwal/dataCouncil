import React from "react";

const FiftPage = () => {
  return (
    <div className=" flex flex-col items-start ml-36 mt-10">
      <div className="my-5">
        <h1 className="text-4xl font-bold mt-10">
          Ratings & Reviews by learners
        </h1>
        <p className="mt-4 mb-4">
          Data Council has received honest feedback from our learners around the
          globe.
        </p>
        <div className="flex flex-row w-40">
          <img src="https://skill-lync.com/nsimages/googleRating.png" alt="" />
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div className="w-56 flex flex-row mt-5 justify-">
          <img
            className="m-2 "
            src="https://www.socialproofy.io/wp-content/uploads/2020/06/socialproofy-random-reviews.jpg"
            alt=""
          />
          <img
            className="m-2 "
            src="https://www.socialproofy.io/wp-content/uploads/2020/06/socialproofy-random-reviews.jpg"
            alt=""
          />
          <img
            className="m-2 "
            src="https://www.socialproofy.io/wp-content/uploads/2020/06/socialproofy-random-reviews.jpg"
            alt=""
          />
          <img
            className="m-2 "
            src="https://www.socialproofy.io/wp-content/uploads/2020/06/socialproofy-random-reviews.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FiftPage;
