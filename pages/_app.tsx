import React from 'react';
import { AppProps } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { AuthProvider } from 'contexts/Auth';
import { ModalProvider } from 'contexts/Modal';

import 'styles/app.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-datepicker/dist/react-datepicker.css";
import 'react-notifications/lib/notifications.css';

NProgress.configure({
  minimum: 0.1,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
  credentials: 'include',
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}
export default MyApp;
