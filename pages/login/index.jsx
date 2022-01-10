import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <div className="bg-neutral-900 font-EbG h-screen flex items-center justify-center w-full">
      <div className="max-w-xl w-full p-4 space-y-10  rounded-lg">
        <h1 className="sm:text-6xl text-5xl capitalize  font-bold text-white text-center">
          Sign in to blogs
        </h1>
        <form className="space-y-6 text-2xl text-white font-bold">
          <div className="space-y-3">
            <label htmlFor="name" className="text-xl ">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-8 py-4 rounded-lg focus:outline-none tracking-widest bg-zinc-700"
              placeholder="type your email......."
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="name" className="text-xl ">
              password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-8 py-4 rounded-lg focus:outline-none tracking-widest bg-zinc-700"
              placeholder="type your password......."
            />
          </div>
          <div className="w-full text-center">
            <button
              type="submit"
              className="bg-gray-700 px-8 py-3 text-2xl  rounded-full"
            >
              sing in
            </button>
          </div>
        </form>

        <div className="flex space-x-2 text-white sm:justify-end justify-start text-xl">
          <span>Already have an account?</span>
          <Link href="/register" className="hover:underline underline-offset-4">
            register
          </Link>
        </div>
      </div>
    </div>
  );
}

index.layout = "L2";
