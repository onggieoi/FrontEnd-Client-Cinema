import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import HomePage from 'containers/HomePage';
import Layout from 'containers/AppLayout';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Cinema | UNKNOWN</title>
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
};

export default Home;
