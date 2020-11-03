import React from 'react';

type Props = {
  cardNumber: string;
  name: string;
  csv: string;
}

const CreditCard: React.FC<Props> = ({ cardNumber, name, csv }) => {

  return (
    <div className="card">
      <div className="card__front card__part">
        <img className="card__front-square card__square"
          src="https://image.ibb.co/cZeFjx/little_square.png" />
        <img className="card__front-logo card__logo"
          src="/logo.png" />
        <p className="card_numer">**** **** **** {cardNumber.toString().split('').slice(-4, cardNumber.length)}</p>
        <div className="card__space-75">
          <span className="card__label">Card holder</span>
          <p className="card__info">{name}</p>
        </div>
        <div className="card__space-25">
          <span className="card__label">Expires</span>
          <p className="card__info">10/25</p>
        </div>
      </div>

      <div className="card__back card__part">
        <div className="card__black-line"></div>
        <div className="card__back-content">
          <div className="card__secret">
            <p className="card__secret--last">{csv}</p>
          </div>
          <img className="card__back-square card__square"
            src="https://image.ibb.co/cZeFjx/little_square.png" />
          <img className="card__back-logo card__logo"
            src="/logo.png" />
        </div>
      </div>

    </div>
  );
};

export default CreditCard;