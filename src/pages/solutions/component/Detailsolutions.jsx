import React from "react";

const DetailSolutions = () => {
  return (
    <div className="flex flex-col items-center py-12 px-6 md:px-16 space-y-5 font-lato mb-10">
      <h2 className="text-2xl font-semibold relative">
        What makes us different?
        <span className="block w-24 h-1 bg-blue-600 mt-2 mx-auto"></span>
      </h2>
      <p className="text-center text-lg text-gray-600">
        We provide innovative solutions across various industries to make the
        world a better place. Together, we push boundaries and drive progress.
        "We solve. You succeed. It’s as simple as that."
      </p>
      <button
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        onClick={() => alert("Exploring Solutions")}
      >
        Explore Solutions
      </button>
    </div>
  );
};

export default DetailSolutions;
