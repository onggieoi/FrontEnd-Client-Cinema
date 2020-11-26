import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import ProfilePage from 'containers/Profile';
import Layout from 'containers/AppLayout';

const Check: NextPage = () => (
  <>
    <Head>
      <title>Profile</title>
    </Head>
    <Layout>
      <ProfilePage />
    </Layout>
  </>
);

export default Check;
