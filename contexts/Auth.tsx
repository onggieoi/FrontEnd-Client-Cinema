import { createContext, useState, useEffect } from 'react';

import { useMeCustomerQuery, useLogoutMutation } from 'graphql/generated';

interface AuthContext {
  isAuth: boolean;
  logout: Function;
  login: Function;
}

export const AuthContext = createContext({} as AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);

  const { data, refetch, } = useMeCustomerQuery({
    onCompleted: () => {
      setAuth(!!data?.meCustomer?.customer)
    },
    fetchPolicy: 'no-cache',
  });

  const [Logout] = useLogoutMutation();

  const logout = async () => {
    const logoutResult = await Logout();
    if (logoutResult) {
      setAuth(false);
    }
  };

  const login = () => {
    setAuth(true);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
