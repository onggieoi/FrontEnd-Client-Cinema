import React from 'react';

import SignUp from 'containers/Modal/Auth/SignUp';

const ProfilePage = () => {
  return (
    <>
      {/* Header */}
      <div className='top-bar mb-5'>
        <div className="-intro-x mx-auto">
          Welcome back
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left side */}
        <div className="col-span-12 lg:col-span-4 border">
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
            </div>

            {/* Content */}
            <div className="p-5 border-t border-gray-200">
              blabal
            </div>
          </div>
        </div>

        {/* Mid Side */}
        <div className='col-span-12 lg:col-span-8 border'>
          <div className="intro-y box lg:mt-5">
            <div className='p-5 border-b border-gray-200 text-center'>Update Account</div>
            <div className='p-5'>
              <SignUp />
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
