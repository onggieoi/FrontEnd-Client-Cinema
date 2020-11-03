import React from 'react';
import Link from 'next/link';

import Slider from 'components/Slider';
import Cards from 'components/ListCard';

import { dataComming, dataShowing } from 'dataEx';
import { useMoviesForHomeQuery } from 'graphql/generated';

const HomePage = () => {
  const { data, loading, error } = useMoviesForHomeQuery();
  return (
    <>
      <div className='top-bar my-5'>
        <div className="-intro-x text-gradient font-bold text-6xl text-center w-full block">
          All The World's a Stage
        </div>
      </div>

      <div className='mx-auto overflow-hidden intro-x' style={{ maxWidth: '1500px', maxHeight: '500px' }}>
        <Slider data={['cinema1', 'cinema2', 'cinema3', 'cinema4']} />
      </div>

      <div className="grid grid-cols-12 gap-6 mt-5 intro-x">

        {/* Showing Now */}
        <div className='col-span-6 flex-row -intro-x'>
          <div className='text-gradient font-bold text-6xl text-center w-full intro-x'>Now Showing</div>
          <div className='grid grid-cols-12 gap-6 mt-5'>
            <Cards data={data?.moviesForHome?.moviesShowing} className='col-span-6' />
          </div>

          {/* button discover */}
          <div className='flex my-5'>
            <Link href='/showing'>
              <div className='py-2 px-5 font-bold cursor-pointer border-theme-100 border-2 text-theme-100 mx-auto hover:bg-theme-100 hover:text-white'>
                Discover More
            </div>
            </Link>
          </div>
        </div>

        {/* Comming soon */}
        <div className='col-span-6 flex-row -intro-x'>
          <div className='text-gradient font-bold text-6xl text-center w-full intro-x'>Comming Soon</div>
          <div className='grid grid-cols-12 gap-6 mt-5'>
            <Cards data={data?.moviesForHome.moviesComming} className='col-span-6' />
          </div>

          {/* button discover */}
          <div className='flex my-5'>
            <Link href='/comming'>
              <div className='py-2 px-5 font-bold cursor-pointer border-theme-100 border-2 text-theme-100 mx-auto hover:bg-theme-100 hover:text-white'>
                Discover More
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
