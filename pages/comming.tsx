import React from 'react';
import Head from 'next/head';

import Comming from 'containers/Comming';
import Layout from 'containers/AppLayout';

const CommingPage = () => (
  <>
    <Head>
      <title>UNKNOWN | Comming</title>
    </Head>
    <Layout>
      <Comming />
    </Layout>
  </>
);

export default CommingPage;
