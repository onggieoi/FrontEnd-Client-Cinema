import React from 'react';

import Card from 'components/Card';

interface Props {
  data: any;
  className?: string | null;
};

const Cards: React.FC<Props> = ({ data, className }) => {
  return (
    <>
      {
        data?.map((card) => (
          <div key={card.id} className={`intro-x ${className}`}>
            <Card data={card} />
          </div>
        ))
      }
    </>
  );
};

export default Cards;
