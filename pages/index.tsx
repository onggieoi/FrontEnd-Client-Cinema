import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import CustomersPage from 'containers/Customers';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Customers</title>
    </Head>
    <CustomersPage />
  </>
);

export default Home;
