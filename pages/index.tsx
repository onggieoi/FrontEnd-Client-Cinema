import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import HomePage from 'containers/HomePage';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>UNKNOWN | Cinema</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
