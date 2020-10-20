import React, { useContext } from 'react';

interface ModalProps {
  isOpen: boolean;
  Component: React.FC<any>;
  onClose: Function;
  props?: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, Component, props }) => {

  return isOpen ? (
    <div className='absolute top-0 left-0'>
      <div className="justify-center items-center flex fixed
              inset-0 z-51 outline-none focus:outline-none mx-auto my-auto"
        style={{ maxWidth: '1000px', maxHeight: '90vh', zIndex: 100 }}
      >
        <div className="relative my-6 mx-auto ">
          {/* content */}
          <Component {...props} />
        </div>
      </div>

      {/* mask */}
      <div className="opacity-25 fixed inset-0 bg-black" style={{ zIndex: 99 }}
        onClick={() => onClose()}></div>
    </div >
  ) : null
};

export default Modal;
