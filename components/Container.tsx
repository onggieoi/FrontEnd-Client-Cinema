import React from 'react';

const Container: React.FC<any> = ({ children }) => (
  <div className='content'>
    {children}
  </div >
);

export default Container;
