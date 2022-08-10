import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

import client from '../src/apolloConfig';
import './../styles/globals.css';
import { GlobalStore } from '../src/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStore>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </GlobalStore>
  );
}

export default MyApp;
