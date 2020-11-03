import React from 'react';
import Head from 'next/head';

import Showing from 'containers/Showing';
import Layout from 'containers/AppLayout';

const ShowingPage = () => (
  <>
    <Head>
      <title>UNKNOWN | Showing</title>
    </Head>
    <Layout>
      <Showing />
    </Layout>
  </>
);

export default ShowingPage;
