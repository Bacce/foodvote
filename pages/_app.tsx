import { NextPage } from "next";

const App: NextPage = ({ Component, pageProps }:any) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
