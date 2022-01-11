import Link from "next/link";

export default function Home() {
  return (
    <div className="py-10 flex justify-center items-center bg-no-repeat bg-cover saturate-200 relative bg-[url(https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] h-screen">
      <div className="absolute top-0 left-0 h-screen w-full bg-black bg-opacity-80"></div>
      <div className="max-w-7xl font-poppins text-white md:px-10 sm:px-8 px-4 w-full z-20">
        <h2 className="text-2xl font-normal ">Hello! welcome to</h2>
        <h1 className="sm:text-[9vw] capitalize text-6xl -ml-1 mt-2  font-bold mx-auto ">
          Hrpiper blog
        </h1>
        <p className="text-xl font-normal mt-8 w-full sm:max-w-2xl leading-normal md:leading-loose tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed
          cumque odio officia libero neque dolor excepturi nemo, quae aliquid
          deleniti dicta ullam explicabo debitis.
        </p>

        <div className="h-20 sm:max-w-xs w-full flex sm:items-start items-center  mt-8">
          <Link href="/blog">
            <a className=" transition-all  duration-100 text-xl py-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 sm:h-14 animate-bounce sm:w-14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
Home.layout = "L3";
