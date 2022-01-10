import React, { useState } from "react";
import Link from "next/link";
import SearchBox from "./SearchBox";

export default function Navbar() {
  const [searchBox, setsearchBox] = useState(false);
  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="w-full flex justify-between items-center p-4">
        <span className="text-white text-4xl font-bold font-EbG">HrBlogs</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 md:hidden block text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div className="font-bold space-x-8 font-workSans md:flex hidden items-center capitalize">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white w-10 h-10 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setsearchBox(!searchBox)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <Link href="/login">
            <a className="text-white">sign in</a>
          </Link>
          <Link href="/register">
            <a className="text-white bg-green-700 hover:bg-green-600 px-6 py-2 rounded-full">
              register
            </a>
          </Link>
        </div>
      </div>

      {searchBox ? <SearchBox searchboxhide={setsearchBox} /> : null}
    </div>
  );
}
