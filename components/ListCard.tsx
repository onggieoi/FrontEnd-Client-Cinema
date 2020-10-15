import React from 'react';

import { CardData } from 'interfaces';
import Card from 'components/Card';

interface Props {
  data: CardData[];
  className?: string | null;
};

const Cards: React.FC<Props> = ({ data, className }) => {
  return (
    <>
      {
        data.map((card) => (
          <div key={ card.id } className={ `${className}` }>
            <Card data={ card } />
          </div>
        ))
      }
    </>
  );
};

export default Cards;
