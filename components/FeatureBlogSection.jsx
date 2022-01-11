import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FeatureBlogSection({
  title,
  content,
  id,
  category,
  time,
  authorfirstName,
  authorlastName,
  img,
}) {
  var slugify = require("slugify");
  return (
    <div className="max-w-5xl md:px-6 px-8 font-workSans mt-6 w-full mx-auto">
      <Link href={`/blog/${id}`}>
        <a>
          <div className="w-full mt-10 md:space-x-6 md:space-y-0 space-y-6 flex md:flex-row flex-col">
            <div className="md:w-64 relative md:h-72 sm:h-96 h-64 lg:shrink-0 shrink w-full">
              <Image
                src={img}
                alt="test"
                layout="fill"
                className="rounded-3xl object-cover absolute"
              />
            </div>
            <div className="md:w-3/4 w-full space-y-5 py-6">
              <span className="text-white bg-indigo-700 py-2 px-5 rounded-full text-sm capitalize">
                {category}
              </span>
              <div>
                <h1 className="sm:text-4xl text-2xl hover:underline underline-offset-4 text-white cursor-pointer">
                  {title}
                </h1>
              </div>
              <p className="line-clamp-3 text-gray-300 sm:text-lg text-sm">
                {content}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-gray-300 sm:text-sm text-xs">{time}</p>
                <p className="text-gray-300 space-x-3 sm:text-sm text-xs">
                  @ <span>{authorfirstName}</span>
                  <span>{authorlastName}</span>
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
