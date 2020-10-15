import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Carousel } from 'react-responsive-carousel';

const Home: NextPage = () => {
  const imgs = ['cinema1', 'cinema2', 'cinema3'];
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className='top-bar mb-5'>
        <div className="-intro-x breadcrumb mr-auto hidden sm:flex">
          Home
        </div>
      </div>
      <div className='mx-auto' style={{ maxWidth: '1500px' }}>
        <Carousel
          swipeable
          showStatus={false}
          showThumbs={false}
          infiniteLoop
          autoPlay
        >
          {
            imgs.map((imgSrc) => (
              <div key={imgSrc} className='object-center w-full' style={{ height: '500px' }} >
                <img src={`/slidesHome/${imgSrc}.jpg`} />
              </div>
            ))
          }
        </Carousel>
      </div>

      <div className='h-screen'></div>


    </>
  );
};

export default Home;
