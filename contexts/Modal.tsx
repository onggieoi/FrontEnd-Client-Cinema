import { createContext, useState } from 'react';

interface ModalContext {
  isOpen: boolean;
  props?: any;
  setOpen: Function;
  onClose: Function;
  setProps: Function
}

export const ModalContext = createContext({} as ModalContext);

export const ModalProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [props, setProps] = useState({});

  const onClose = () => {
    setOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setOpen,
        onClose,
        props,
        setProps,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
