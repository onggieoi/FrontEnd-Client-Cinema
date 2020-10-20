import React, { useReducer } from 'react';

import { AuthContext } from 'contexts/auth/auth.context';
import { getLocalState } from 'helper/localStorage';

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
      };
    case 'LOG_OUT':
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(
    reducer,
    !!getLocalState('token'),
  );

  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
