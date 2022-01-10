import { data } from "autoprefixer";
import Head from "next/head";
import Image from "next/image";
import FeatureBlogSection from "../components/FeatureBlogSection";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://615d679b12571a00172075c8.mockapi.io/api/post"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
export default function Home({ data }) {
  return (
    <div className="mt-4">
      <h2 className="text-3xl max-w-5xl px-8 mx-auto text-white underline underline-offset-2 decoration-blue-700">
        Featured posts
      </h2>
      {data.map((post, index) => {
        return (
          <FeatureBlogSection
            key={index}
            title={post.title}
            category={post.category}
            content={post.content}
            time={post.createdAt}
            authorfirstName={post.authorfirstName}
            authorlastName={post.authorlastName}
            id={post.id}
            img={post.img}
          />
        );
      })}
    </div>
  );
}
Home.layout = "L1";
