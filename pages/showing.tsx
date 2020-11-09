import React from 'react';
import Head from 'next/head';

import Showing from 'containers/Showing';
import Layout from 'containers/AppLayout';

import { useMoviesShowingQuery } from 'graphql/generated';

const ShowingPage = () => {
  const { data } = useMoviesShowingQuery();

  return (
    <>
      <Head>
        <title>UNKNOWN | Showing</title>
      </Head>
      <Layout>
        <Showing data={data?.moviesShowing} />
      </Layout>
    </>
  );
}

export default ShowingPage;
