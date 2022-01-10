import Link from "next/link";
import React from "react";

function loginLayout({ children }) {
  return (
    <div>
      <div className="h-20 flex items-center px-10 absolute top-0 left-0 w-full">
        <Link href="/">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </a>
        </Link>
      </div>
      {children}
    </div>
  );
}

export default loginLayout;
