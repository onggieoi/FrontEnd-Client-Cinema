import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Trello,
  LogOut,
  Home
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
    <nav className='side-nav h-full relative' style={{ height: '95vh' }}>
      <a className=" flex items-center pl-5 pt-4 cursor-pointer" >
        <img alt="Midone Tailwind HTML Admin Template" style={{ maxHeight: '100px' }} src="/logo_dalat.png"></img>
      </a>
      <div className='side-nav__devider my-6'></div>
      <ul>
        <li className=' cursor-pointer'>
          <Link href='/'>
            <div className={`side-menu ${activeClass('/')}`}>
              <div className="side-menu__icon"> <Home /> </div>
              <div className="side-menu__title"> Home </div>
            </div>
          </Link>
        </li>
        <li className=' cursor-pointer'>
          <Link href='/pos'>
            <div className={`side-menu ${activeClass('/pos')}`}>
              <div className="side-menu__icon"> <Trello /> </div>
              <div className="side-menu__title"> Point of Sales </div>
            </div>
          </Link>
        </li>
      </ul>

      {/* Log out */}
      <div className='absolute bottom-0 w-full'>
        <div className='side-nav__devider my-6'></div>
        <button onClick={logout}>
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
