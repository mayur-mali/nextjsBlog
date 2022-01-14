import { useState, useEffect } from "react";
import FeatureBlogSection from "../../components/FeatureBlogSection";
import Skelaton from "../../components/Skelaton";

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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const interval = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(interval);
  }, [data]);
  return (
    <div className="mt-4 py-10">
      <h2 className="text-3xl max-w-5xl px-8 mx-auto dark:text-white text-black underline underline-offset-2 decoration-blue-700">
        Featured posts
      </h2>

      {loading && (
        <>
          {data.map((post, index) => {
            return <Skelaton key={index} />;
          })}
        </>
      )}
      {!loading && (
        <>
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
        </>
      )}
    </div>
  );
}
Home.layout = "L1";
