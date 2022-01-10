import Link from "next/link";

export default function Home() {
  return (
    <div className="py-10 flex justify-center items-center bg-zinc-800 h-screen">
      <div className="space-y-12">
        <h2 className="text-6xl max-w-5xl font-EbG px-8 mx-auto text-white text-center">
          Welcome to HRPIPER Blog !
        </h2>

        <div className="text-center h-20 py-4">
          <Link href="/blog">
            <a className="px-4 hover:px-6 hover:py-3 transition-all duration-100 hover:text-xl py-2 bg-white rounded-lg text-2xl font-bold font-workSans">
              Go To Blog !
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
Home.layout = "L3";
