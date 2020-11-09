import React from 'react';
import Head from 'next/head';

import Comming from 'containers/Comming';
import Layout from 'containers/AppLayout';
import { useMoviesCommingQuery } from 'graphql/generated';

const CommingPage = () => {
  const { data } = useMoviesCommingQuery();

  return (
    <>
      <Head>
        <title>UNKNOWN | Comming</title>
      </Head>
      <Layout>
        <Comming data={data?.moviesComming} />
      </Layout>
    </>
  );
}

export default CommingPage;
