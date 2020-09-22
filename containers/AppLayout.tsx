import React from 'react';

import SideMenu from 'components/SideMenu';
import Container from 'components/Container';

const Layout: React.FC<any> = ({ children }) => (
  <div className='flex'>
    <SideMenu />
    <Container>
      {children}
    </Container>
  </div>
);

export default Layout;
