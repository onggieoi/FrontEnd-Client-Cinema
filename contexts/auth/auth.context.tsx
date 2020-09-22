import { createContext } from 'react';

interface AuthContextProps {
  authState: boolean;
  authDispatch: any;
}

export const AuthContext = createContext({} as AuthContextProps);
