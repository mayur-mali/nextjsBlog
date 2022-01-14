import React from "react";

export default function Skelaton() {
  return (
    <div className="max-w-5xl md:px-6 px-8 font-workSans mt-6 w-full mx-auto">
      <div className="w-full mt-10 md:space-x-6 md:space-y-0 space-y-6 flex md:flex-row flex-col">
        <div className="md:w-64  md:h-72 sm:h-96 animate-pulse h-64 rounded-3xl w-full dark:bg-white bg-gray-600"></div>
        <div className="md:w-3/4 w-full space-y-5 py-6">
          <div className="bg-indigo-700 py-5 rounded-full animate-pulse w-32"></div>
          <div className="w-full dark:bg-white bg-gray-500 py-5 animate-pulse"></div>
          <p className=" bg-gray-400 py-1.5 animate-pulse "></p>
          <p className=" bg-gray-400 py-1.5 animate-pulse "></p>
          <p className=" bg-gray-400 py-1.5 animate-pulse "></p>
          <div className="flex justify-between items-center">
            <p className="bg-gray-400 py-1 w-40 animate-pulse"></p>
            <p className="bg-gray-400 py-1 sm:w-32 w-12 animate-pulse"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
