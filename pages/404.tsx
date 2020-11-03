import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const ErrorPage = () => (
  <>
    <Head>
      <title>404 | Not Found</title>
    </Head>
    <div className="container">
      <div className="error-page flex items-center justify-center text-center" style={{ height: '95vh' }}>
        <div className="intro-x">
          <img alt="Midone Tailwind HTML Admin Template" src='/error-illustration.svg' style={{ width: '400px' }} />
        </div>
        <div className="text-white mt-10">
          <div className="intro-x text-6xl font-medium">404</div>
          <div className="intro-x text-xl lg:text-3xl font-medium">Oops. This page has gone missing.</div>
          <div className="intro-x text-lg mt-3">You may have mistyped the address or the page may have moved.</div>
          <Link href='/'>
            <button className="intro-x button button--lg border border-white mt-10 px-10 py-2">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default ErrorPage;
