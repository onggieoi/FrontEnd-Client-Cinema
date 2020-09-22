import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import ProfilePage from 'containers/Profile';

const Check: NextPage = () => (
  <>
    <Head>
      <title>Profile</title>
    </Head>
    <ProfilePage />
  </>
);

export default Check;
