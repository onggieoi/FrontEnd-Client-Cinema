import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import HomePage from 'containers/HomePage';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <HomePage />
  </>
);

export default Home;
