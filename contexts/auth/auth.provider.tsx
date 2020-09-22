import React, { useReducer } from 'react';

import { AuthContext } from 'contexts/auth/auth.context';
import { getLocalState } from 'helper/localStorage';

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'SIGNIN':
      return {
        ...state,
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

const AuthProvider = (props: any) => {
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
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
