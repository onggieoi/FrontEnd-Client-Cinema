import React from 'react';
import Slider from 'components/silder';

const HomePage = () => {
  console.log('Home');

  return (
    <>
      <div className='top-bar'>
        <div className="-intro-x breadcrumb mr-auto hidden sm:flex">
          Home
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 mt-5 mx-2">
          <Slider />
        </div>
      </div>
    </>
  );
};

export default HomePage;
