import React from 'react';
import { Carousel } from 'react-responsive-carousel';

type Props = {
  data: string[];
}

const Slider: React.FC<Props> = ({ data }) => {
  return (
    <Carousel
      swipeable
      showStatus={ false }
      showThumbs={ false }
      infiniteLoop
      autoPlay
    >
      {
        data.map((imgSrc) => (
          <div key={ imgSrc } className='object-center w-full'>
            <img src={ `/slidesHome/${imgSrc}.jpg` } />
          </div>
        ))
      }
    </Carousel>
  );
};

export default Slider;
