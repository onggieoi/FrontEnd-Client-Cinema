import React from 'react';

import { CardData } from 'interfaces';

interface Props {
  data: CardData;
};

const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className='w-full zoom-in'>
      <img src={ data.image } alt={ data.title } style={ { height: '250px' } } className='w-full object-cover' />
      <div className='py-2 mx-5' style={ { height: '70px' } }>
        <div className='text-xl font-bold truncate'>{ data.title.toUpperCase() }</div>
        <div className='truncate capitalize'>{ data.subTitle?.toLowerCase() }</div>
      </div>
    </div>
  );
};

export default Card;
