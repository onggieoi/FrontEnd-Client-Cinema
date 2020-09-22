import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { AuthContext } from 'contexts/auth/auth.context';

const Auth: React.FC<any> = ({ children }) => {
  const { authState } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (!authState) {
      router.push('/login');
    }
  }, [authState]);

  return children;
};

export default Auth;
