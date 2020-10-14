import React from 'react';
import Slider from 'react-slick';

const SilderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div className='h-64 bg-pink-400'>
        <h3>1</h3>
      </div>
      <div className='h-64 bg-pink-400'>
        <h3>2</h3>
      </div>
      <div className='h-64 bg-pink-400'>
        <h3>3</h3>
      </div>
      <div className='h-64 bg-pink-400'>
        <h3>4</h3>
      </div>
      <div className='h-64 bg-pink-400'>
        <h3>5</h3>
      </div>
      <div className='h-64 bg-pink-400'>
        <h3>6</h3>
      </div>
    </Slider>
  );
}

export default SilderComponent;
