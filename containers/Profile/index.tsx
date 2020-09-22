import React, { useState } from 'react';
import {
  Activity, Box, Layout, Sidebar, MoreHorizontal, Lock, Settings, CreditCard, Mail,
} from 'react-feather';

import FormComponent from 'containers/Profile/Form';

const ProfilePage = () => {
  const [dropDown, setDropDown] = useState(false);

  const handleDrop = () => {
    setDropDown(!dropDown);
  };

  const isDrop = () => {
    if (dropDown) return 'show';
    return '';
  };

  return (
    <>
      {/* Header */}
      <div className='top-bar'>
        <div className="-intro-x breadcrumb mr-auto hidden sm:flex">
          Profile
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left side */}
        <div className="col-span-12 lg:col-span-3 xxl:col-span-3 flex lg:block flex-col-reverse">
          <div className="intro-y box mt-5">

            {/* Header */}
            <div className="relative flex items-center p-5">
              <div className="w-12 h-12 image-fit">
                <img className="rounded-full" src="/profile-14.jpg" />
              </div>
              <div className="ml-4 mr-auto">
                <div className="font-medium text-base">John Travolta</div>
                <div className="text-gray-600">Software Engineer</div>
              </div>

              {/* Dropdown */}
              <div className="dropdown relative">
                <button className="dropdown-toggle w-5 h-5 block" onClick={handleDrop}>
                  <MoreHorizontal className="w-5 h-5 text-gray-700" />
                </button>
                <div className={`dropdown-box mt-5 absolute w-56 top-0 right-0 z-20 ${isDrop()}`}>
                  <div className="dropdown-box__content box">
                    <div className="p-4 border-b border-gray-200 font-medium">Export Options</div>
                    <div className="p-2">
                      <a href="" className="flex items-center p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md">
                        <Activity className="w-4 h-4 text-gray-700 mr-2" />
                          English
                        </a>
                      <a href="" className="flex items-center p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md">
                        <Box className="w-4 h-4 text-gray-700 mr-2" />
                          Indonesia
                          <div className="text-xs text-white px-1 rounded-full bg-theme-6 ml-auto">10</div>
                      </a>
                      <a href="" className="flex items-center p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md">
                        <Layout className="w-4 h-4 text-gray-700 mr-2" />
                          English
                        </a>
                      <a href="" className="flex items-center p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md">
                        <Sidebar className="w-4 h-4 text-gray-700 mr-2" />
                          Indonesia
                        </a>
                    </div>
                    <div className="px-3 py-3 border-t border-gray-200 font-medium flex">
                      <button type="button" className="button button--sm bg-theme-1 text-white">
                        Settings
                        </button>
                      <button type="button" className="button button--sm bg-gray-200 text-gray-600 ml-auto">
                        View Profile
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 border-t border-gray-200">
              <a className="flex items-center" href="">
                <Settings className="w-4 h-4 mr-2" />
                  Account Settings
                </a>
              <a className="flex items-center mt-5" href="">
                <Lock className="w-4 h-4 mr-2" />
                  Change Password
                </a>
              <a className="flex items-center mt-5" href="">
                <Mail className="w-4 h-4 mr-2" />
                  Email Settings
                </a>
            </div>
            <div className="p-5 border-t border-gray-200">
              <a className="flex items-center" href="">
                <CreditCard className="w-4 h-4 mr-2" />
                  Credit Cards
                </a>
            </div>
          </div>
        </div>

        {/* Mid Side */}
        <div className='col-span-12 lg:col-span-6 xxl:col-span-6'>
          <div className="intro-y box lg:mt-5">
            <div className='p-5 border-b border-gray-200 text-center'>Info</div>
            <div className='p-5'>
              <FormComponent />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-12 lg:col-span-3 xxl:col-span-3 flex lg:block flex-col-reverse">
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
