import React from 'react';

import Link from 'next/link';
import { Movie } from 'graphql/generated';

interface Props {
  data: Movie;
};

const Card: React.FC<Props> = ({ data }) => {
  return (
    <Link href={`/movie/${data.id}`}>
      <div className='w-full zoom-in'>
        <img src={data.thumbnail} alt={data.name} style={{ height: '600px' }} className='w-full object-cover' />
        <div className='py-2 mx-5' style={{ height: '70px' }}>
          <div className='text-xl font-bold truncate'>{data?.name?.toUpperCase()}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
