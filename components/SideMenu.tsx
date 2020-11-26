import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  LogOut,
  Home,
  Activity,
  Film,
  LogIn,
  Settings,
} from 'react-feather';

import AuthModal from 'containers/Modal/Auth';
import Modal from 'components/Modal';
import { AuthContext } from 'contexts/Auth';
import { ModalContext } from 'contexts/Modal';

const SideMenu: React.FC = () => {
  const Router = useRouter();
  const { isOpen, onOpen, onClose } = useContext(ModalContext);
  const { logout, isAuth } = useContext(AuthContext);

  const activeClass = (page: string) => {
    if (page === Router.pathname) {
      return 'side-menu--active';
    }
    return '';
  };

  const handleLogin = () => {
    onOpen();
  };

  return (
    <nav className='side-nav h-full relative' style={{ height: '95vh' }}>
      <Link href='/'>
        <div className=" flex-col items-center cursor-pointer" >
          <img alt="unknown" className='w-full' src="/logo.png" />
          <p className='text-center text-theme-200 font-bold text-lg'>Point of Sales</p>
        </div>
      </Link>

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
        <li className='cursor-pointer'>
          <Link href='/showing'>
            <div className={`side-menu ${activeClass('/showing')}`}>
              <div className="side-menu__icon"> <Film /> </div>
              <div className="side-menu__title"> Showing now </div>
            </div>
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link href='/comming'>
            <div className={`side-menu ${activeClass('/comming')}`}>
              <div className="side-menu__icon"> <Activity /> </div>
              <div className="side-menu__title"> Comming soon </div>
            </div>
          </Link>
        </li>
      </ul>

      {/* bottom bar */}
      <div className='absolute bottom-0 w-11/12'>

        <div className='side-nav__devider_white my-6'></div>

        {
          isAuth ? (
            <>
              {/* <div className='cursor-pointer'>
                <Link href='/profile'>
                  <div className={`side-menu ${activeClass('/profile')}`}>
                    <div className="side-menu__icon"> <Settings /> </div>
                    <div className="side-menu__title"> Profile </div>
                  </div>
                </Link>
              </div> */}

              <button onClick={async () => await logout()} className='focus:outline-none'>
                <div className='side-menu'>
                  <div className="side-menu__icon">
                    <LogOut />
                  </div>
                  <div className="side-menu__title"> Logout </div>
                </div>
              </button>
            </>
          ) : (
              <button onClick={handleLogin} className='focus:outline-none'>
                <div className='side-menu'>
                  <div className="side-menu__icon">
                    <LogIn />
                  </div>
                  <div className="side-menu__title"> Login </div>
                </div>
              </button>
            )
        }

      </div>
      <Modal isOpen={isOpen} onClose={() => onClose()}>
        <AuthModal />
      </Modal>
    </nav >
  );
};

export default SideMenu;
