//import { AppProps } from 'next/app';
import Head from "next/head";
import { MantineProviderWrapper } from "../utils/MantineTheme";
import {SessionDetailsProvider} from '../lib/session'

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <MantineProviderWrapper>
      <SessionDetailsProvider>
       <Component {...pageProps} />
       </SessionDetailsProvider>
    </MantineProviderWrapper> 
  );
}
/* import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
 */
