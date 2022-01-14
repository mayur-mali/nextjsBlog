import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchBox from "./SearchBox";
import Head from "next/head";
import Router from "next/router";
import Nprogress from "nprogress";
import { useTheme } from "next-themes";

Router.onRouteChangeStart = (url) => {
  Nprogress.start();
};

Router.onRouteChangeComplete = () => Nprogress.done();
Router.onRouteChangeError = () => Nprogress.done();
Nprogress.configure({ showSpinner: false });
export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isLogging, setisLogging] = useState(false);
  const [searchBox, setsearchBox] = useState(false);
  const [openMenu, setopenMenu] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={() => setTheme("light")}
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      );
    } else {
      return (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-black cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={() => setTheme("dark")}
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </span>
      );
    }
  };

  const handleSubmit = () => {
    setisLogging(true);
  };
  const handleLogout = () => {
    setisLogging(false);
  };
  return (
    <div className="w-full bg-gray-100 dark:bg-transparent dark:shadow-none shadow">
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
        <div className="w-full flex justify-between items-center md:p-4 px-4 py-4">
          <Link href="/">
            <a>
              <span className="dark:text-white text-black text-4xl font-bold font-EbG">
                HrBlogs
              </span>
            </a>
          </Link>
          <div className="flex space-x-5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 md:hidden block cursor-pointer dark:text-white text-black"
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
            <span className="md:hidden block">{renderThemeChanger()}</span>
          </div>
          {openMenu ? (
            <div className="absolute md:hidden block  w-full h-auto z-20 p-4 top-20 left-0">
              <div className="flex flex-col uppercase items-center py-8 space-y-4 w-full bg-inter-black  rounded-lg">
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

                {!isLogging && (
                  <>
                    <span
                      onClick={handleSubmit}
                      className="text-white px-6 py-2 w-full text-center"
                    >
                      sign in
                    </span>
                    <Link href="/register">
                      <a className="text-white px-6 py-2 w-full text-center">
                        register
                      </a>
                    </Link>
                  </>
                )}
                {isLogging && (
                  <>
                    <Link href="/createpost">
                      <a className="text-white px-6 py-2 w-full text-center">
                        create post
                      </a>
                    </Link>

                    <span
                      className="text-white px-6 py-2 w-full text-center"
                      onClick={handleLogout}
                    >
                      logout
                    </span>
                  </>
                )}
              </div>
            </div>
          ) : null}
          <div className="font-bold space-x-8 font-workSans md:flex hidden items-center capitalize">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="dark:text-white text-black w-10 h-10 cursor-pointer"
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
            {!isLogging && (
              <>
                <span
                  onClick={handleSubmit}
                  className="dark:text-white text-black cursor-pointer"
                >
                  sign in
                </span>
                <Link href="/register">
                  <a className="text-white bg-green-700 hover:bg-green-600 px-6 py-2 rounded-full">
                    register
                  </a>
                </Link>
                {renderThemeChanger()}
              </>
            )}
            {isLogging && (
              <>
                <Link href="/createpost">
                  <a className="text-white">create post</a>
                </Link>

                <span
                  className="text-white bg-green-700 hover:bg-green-600 px-6 py-2 rounded-full"
                  onClick={handleLogout}
                >
                  logout
                </span>
              </>
            )}
          </div>
        </div>

        {searchBox ? <SearchBox searchboxhide={setsearchBox} /> : null}
      </div>
    </div>
  );
}
