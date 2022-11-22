import '../styles.css';
import { NextPage } from 'next';
import Head from 'next/head';
import { Navigation } from '../components/Navigation';
import { useState } from 'react';
import { AppContext } from '../context/AppContext';

export interface contextProps {
  username: string;
}

const App: NextPage = ({ Component, pageProps }: any) => {
  const [contextState, setContextState] = useState<contextProps>({
    username: '',
  });

  return (
    <AppContext.Provider value={{ contextState, setContextState }}>
      <Head>
        <title>FUD</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navigation />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};

export default App;
