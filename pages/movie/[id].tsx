import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

import DetailMovie from 'containers/MovieDetail';
import { ModalProvider } from 'contexts/Modal';
import Layout from 'containers/AppLayout';
import { useMovieQuery } from 'graphql/generated';
import Loader from 'components/Loading';

const DetailPage = () => {
  const router = useRouter();
  const { data, loading, error } = useMovieQuery({
    variables: {
      id: Number(router.query?.id || -1),
    }
  });

  if (error || data?.movie.error) {
    router.push('/404');
  }
  console.log(data);

  return (
    <>
      <Head>
        <title>{data?.movie.movie?.name || 'UNKNOWN'}</title>
      </Head>
      <Layout>
        <ModalProvider>
          {
            loading && (
              <div className='relative h-64'>
                <div className='absolute' style={{ top: '50%', left: '50%' }}>
                  <Loader />
                </div>
              </div>
            )
          }

          {
            data?.movie.movie && <DetailMovie movie={data.movie.movie} />
          }

        </ModalProvider>
      </Layout>
    </>
  );
}

export default DetailPage;
