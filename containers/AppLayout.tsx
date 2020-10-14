import React from 'react';

import SideMenu from 'components/SideMenu';
import Container from 'components/Container';
import Link from 'next/link';

const Layout: React.FC<any> = ({ children }) => (
  <div className='flex'>
    <SideMenu />
    <Container>

      { children }

      <div className='border-t border-theme-5 my-5'></div>

      <div className="flex mx-auto items-center" style={ { maxWidth: '1200px' } }>
        <div className='w-64 cursor-pointer'>
          <Link href='/'>
            <img src="/logo.png" alt="unknown" />
          </Link>
        </div>
        <div className='mx-5'>
          <div className='font-bold mb-2'>
            CÔNG TY UNKNOWN VIETNAM
          </div>
          <div>Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 1 ngày 10/12/2020, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.</div>
          <div>Địa Chỉ: Tầng 2, Huflit Building - Sư Vạn Hạnh, P.14, Q.10, TPHCM.</div>
          <div>Hotline: 1900 1001</div>
        </div>
        <div className=''>
          <div className='font-bold mb-2'>Chăm sóc khách hàng</div>
          <div>Hotline: 1900 1001</div>
          <div>Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)</div>
          <div>Email hỗ trợ: hoidap@unknown.io</div>
        </div>
      </div>
      <div className='text-center font-bold'>COPYRIGHT 2020 UNKNOWN. All RIGHTS RESERVED .</div>
    </Container>
  </div>
);

export default Layout;
