import React, { useState } from "react";
import Link from "next/link";
import SearchBox from "./SearchBox";
import Head from "next/head";
import Router from "next/router";
import Nprogress from "nprogress";

Router.onRouteChangeStart = (url) => {
  console.log(url);
  Nprogress.start();
};

Router.onRouteChangeComplete = () => Nprogress.done();
Router.onRouteChangeError = () => Nprogress.done();
Nprogress.configure({ showSpinner: false });
export default function Navbar() {
  const [searchBox, setsearchBox] = useState(false);
  const [openMenu, setopenMenu] = useState(false);
  return (
    <div className="max-w-7xl w-full mx-auto">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className="w-full flex justify-between items-center md:p-4 px-8 py-4">
        <Link href="/">
          <a>
            <span className="text-white text-4xl font-bold font-EbG">
              HrBlogs
            </span>
          </a>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 md:hidden block cursor-pointer text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setopenMenu(!openMenu)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        {openMenu ? (
          <div className="absolute  w-full h-auto z-20 p-4 top-20 left-0">
            <div className="flex flex-col uppercase items-center py-8 space-y-4 w-full bg-inter-black rounded-lg">
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
                <a className="text-white px-6 py-2 w-full text-center">
                  sign in
                </a>
              </Link>
              <Link href="/register">
                <a className="text-white px-6 py-2 w-full text-center">
                  register
                </a>
              </Link>
            </div>
          </div>
        ) : null}
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
