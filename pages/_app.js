import { useState, useEffect } from "react";
import defautLayout from "../layouts/defautLayout";
import loginLayout from "../layouts/loginLayout";
import withoutNavLayout from "../layouts/withoutNavLayout";
import "../styles/globals.css";
import Spinner from "../components/Spinner";

const layouts = {
  L1: defautLayout,
  L2: loginLayout,
  L3: withoutNavLayout,
};

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
