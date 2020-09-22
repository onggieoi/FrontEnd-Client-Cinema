import React from 'react';

type Props = {
  isLoad?: boolean;
  onClick: Function;
  name: string;
};

const Button: React.FC<Props> = ({ isLoad, onClick, name }) => (
  <button type='button' disabled={isLoad} onClick={onClick()}
    className="button inline-block bg-theme-1 text-white mt-5">
    {name}
    {isLoad && <img src="/oval.svg" className='w-4 h-4 ml-2 inline-block' />}
  </button>);

export default Button;
