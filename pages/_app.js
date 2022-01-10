import defautLayout from "../layouts/defautLayout";
import loginLayout from "../layouts/loginLayout";
import "../styles/globals.css";

const layouts = {
  L1: defautLayout,
  L2: loginLayout,
};

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
