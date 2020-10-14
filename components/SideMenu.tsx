import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Users,
  Trello,
  LogOut,
} from 'react-feather';

import { setLocalState } from 'helper/localStorage';

const SideMenu: React.FC = () => {
  const Router = useRouter();

  const logout = () => {
    setLocalState('token', '');
    Router.push('/login');
  };

  const activeClass = (page: string) => {
    if (page === Router.pathname) {
      return 'side-menu--active';
    }
    return '';
  };

  return (
    <nav className='side-nav h-full relative' style={ { height: '95vh' } }>
      <a className=" flex-col items-center cursor-pointer" >
        <img alt="unknown" className='w-full' src="/logo.png" />
        <p className='text-center text-theme-200 font-bold text-lg'>Point of Sales</p>
      </a>
      <div className='side-nav__devider my-6'></div>
      <ul>
        <li className=' cursor-pointer'>
          <Link href='/'>
            <div className={ `side-menu ${activeClass('/')}` }>
              <div className="side-menu__icon"> <Users /> </div>
              <div className="side-menu__title"> Customers </div>
            </div>
          </Link>
        </li>
        <li className=' cursor-pointer'>
          <Link href='/profile'>
            <div className={ `side-menu ${activeClass('/check')}` }>
              <div className="side-menu__icon"> <Trello /> </div>
              <div className="side-menu__title"> Profile </div>
            </div>
          </Link>
        </li>
      </ul>

      {/* Log out */ }
      <div className='absolute bottom-0 w-11/12'>
        <div className='side-nav__devider_white my-6'></div>
        <button onClick={ logout }>
          <div className='side-menu'>
            <div className="side-menu__icon"> <LogOut /> </div>
            <div className="side-menu__title"> Đăng Xuất </div>
          </div>
        </button>
      </div>
    </nav >
  );
};

export default SideMenu;
