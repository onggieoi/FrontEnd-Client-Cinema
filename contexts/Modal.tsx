import { createContext, useState } from 'react';

interface ModalContext {
  isOpen: boolean;
  props?: any;
  onOpen: Function;
  onClose: Function;
  setProps: Function;
  component: string;
  setComponent: Function;
}

export const ModalContext = createContext({} as ModalContext);

export const ModalProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [props, setProps] = useState({});
  const [component, setComponent] = useState('');

  const onClose = () => {
    setOpen(false);
  }

  const onOpen = () => {
    setOpen(true);
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
        component,
        setComponent,
        props,
        setProps,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
