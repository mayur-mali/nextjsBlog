import Image from "next/image";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://615d679b12571a00172075c8.mockapi.io/api/post"
  );
  const data = await res.json();
  const paths = data.map((currentPost) => {
    return {
      params: {
        postIndivial: currentPost.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.postIndivial;
  const res = await fetch(
    `https://615d679b12571a00172075c8.mockapi.io/api/post/${id}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default function blog({ data }) {
  const { title, content, createdAt, img, authorfirstName, authorlastName } =
    data;
  return (
    <div>
      <div className="h-20 mx-auto flex items-center md:px-4 px-8 max-w-7xl w-full">
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
      <div className="max-w-7xl md:px-4 px-8 space-y-8 h-auto py-4 font-workSans mx-auto">
        <div className="max-w-7xl h-72 relative">
          {img ? (
            <Image
              src={img}
              alt={title}
              layout="fill"
              className="absolute object-cover rounded-lg"
            />
          ) : (
            <div className="rounded-lg bg-slate-800 animate-pulse h-72 absolute">
              hkja
            </div>
          )}
        </div>
        <h1 className="sm:text-4xl text-2xl capitalize text-white">
          title : {title}
        </h1>
        <p className="text-white text-xl">{content}</p>
        <div className="flex justify-between my-6 items-center">
          <p className="text-gray-300 sm:text-sm text-xs">{createdAt}</p>
          <p className="text-gray-300 space-x-3 sm:text-sm text-xs">
            @ <span>{authorfirstName}</span>
            <span>{authorlastName}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

blog.layout = "L1";
