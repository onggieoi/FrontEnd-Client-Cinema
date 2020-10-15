import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  LogOut,
  Home,
  Activity,
  Film,
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
              <div className="side-menu__icon"> <Home /> </div>
              <div className="side-menu__title"> Home </div>
            </div>
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link href='/showing'>
            <div className={ `side-menu ${activeClass('/showing')}` }>
              <div className="side-menu__icon"> <Film /> </div>
              <div className="side-menu__title"> Showing now </div>
            </div>
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link href='/comming'>
            <div className={ `side-menu ${activeClass('/comming')}` }>
              <div className="side-menu__icon"> <Activity /> </div>
              <div className="side-menu__title"> Comming soon </div>
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
