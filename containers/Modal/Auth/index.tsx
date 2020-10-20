import React, { useState } from 'react';

import SignInComponent from 'containers/Modal/Auth/SignIn';
import SignUpComponent from 'containers/Modal/Auth/SignUp';
import ProcessBar from 'components/ProcessBar';

const AuthModal = () => {
  const [isLoading, setLoading] = useState(false);
  const [component, setComponent] = useState('SIGNIN');

  const handleSignIn = () => {
    setComponent('SIGNIN');
  }

  const handleSignUp = () => {
    setComponent('SIGNUP');
  }

  const styleComponent = (com: string) => {
    if (com === component) return '';
    if (com === component) return '';
    return com === 'SIGNIN' ? 'toLeft' : 'toRight';
  }

  return (
    <div className='bg-white overflow-y-auto relative overflow-x-hidden' style={{ width: '1000px', height: '90vh' }}>
      {/* Loading */}
      {
        isLoading && <ProcessBar />
      }

      {/* SignIn */}
      <div className={`transitionComponent ${styleComponent('SIGNIN')}`}>

        <div className='w-full mx-auto border border-theme-100 shadow-lg'>
          <div className='text-center font-bold my-5 text-xl'>
            SIGN IN
          </div>

          <div className='p-10'>
            <SignInComponent />
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <div>You don't have an account?</div>
          <button onClick={handleSignUp}
            className='w-64 py-2 border border-theme-100 my-5 shadow-md ml-5'>
            SIGN UP
          </button>
        </div>
      </div>

      {/* SignUp */}
      <div className={`transitionComponent ${styleComponent('SIGNUP')}`}>

        <div className='w-full mx-auto border border-theme-100 shadow-lg'>
          <div className='text-center font-bold my-5 text-xl'>
            SIGN UP
          </div>

          <div className='p-10'>
            <SignUpComponent />
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <div>Already have an account?</div>
          <button onClick={handleSignIn}
            className='w-64 py-2 border border-theme-100 my-5 shadow-md ml-5'>
            SIGN IN
          </button>
        </div>
      </div>

    </div>
  );
};

export default AuthModal;
