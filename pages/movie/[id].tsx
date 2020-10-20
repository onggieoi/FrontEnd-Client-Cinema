import Head from 'next/head';
import React from 'react';

import DetailMovie from 'containers/MovieDetail';
import { ModalProvider } from 'contexts/Modal';
import { data } from 'dataEx';

const DetailPage = ({ movie }) => {
  return (
    <>
      <Head>
        <title>UNKNOWN | {movie.title}</title>
      </Head>
      <ModalProvider>
        <DetailMovie data={movie} />
      </ModalProvider>
    </>
  );
}

export async function getStaticPaths() {
  const paths = data.map((item) => ({
    params: { id: item.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const movie = data.find((item) => item.id == params.id);

  return {
    props: { movie }
  }
}

export default DetailPage;