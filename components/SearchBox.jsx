import React from "react";

export default function SearchBox(props) {
  return (
    <div className="bg-black bg-opacity-75 fixed z-30 left-0 top-0 w-full h-screen pt-60 ">
      <span
        className="text-3xl absolute top-10 right-10 text-white text-right mr-10"
        onClick={() => props.searchboxhide(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
      <div className="max-w-2xl mx-auto sm:px-0 px-4">
        <div className="rounded-full bg-white sm:p-4 p-3">
          <input
            type="text"
            name="search"
            placeholder="search blog........ "
            className="px-6 py-2 focus:outline-none bg-transparent text-black text-2xl w-full placeholder:capitalize"
          />
        </div>
      </div>
    </div>
  );
}
