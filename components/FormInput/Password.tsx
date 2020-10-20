import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import { useField } from 'formik';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

const PasswordFiled: React.FC<InputFieldProps> = (props) => {
  const [field, { touched, value }] = useField(props);
  const [state, setState] = useState({
    color: '',
    mess: '',
    col: 0,
  });

  useEffect(() => {
    if (value) {
      if (value.length < 6) {
        setState({
          color: 'theme-12',
          mess: 'Weak Password',
          col: 2,
        });
      } else if (value.length > 6) {
        setState({
          color: 'theme-9',
          mess: 'Strong Password',
          col: 4,
        });
      }
    } else if (touched) {
      setState({
        color: 'theme-6',
        mess: 'Password Required',
        col: 0,
      });
    }
  }, [value]);

  const col = (index: number) => {
    if (index <= state.col) {
      return `${state.color}`;
    }
    return 'gray-200';
  };

  return (
    <div className='mb-3'>
      <label className='ml-2'>{props.label}: </label>
      <input className={`input w-full border mt-2 border-${state.color}`} {...field} {...props} type='password' />
      {
        touched && (
          <>
            <div className="w-full grid grid-cols-12 gap-4 h-1 mt-3">
              <div className={`col-span-3 h-full rounded bg-${col(1)}`}></div>
              <div className={`col-span-3 h-full rounded bg-${col(2)}`}></div>
              <div className={`col-span-3 h-full rounded bg-${col(3)}`}></div>
              <div className={`col-span-3 h-full rounded bg-${col(4)}`}></div>
            </div>
            <div className={`text-${state.color} mt-2`}>
              {state.mess}
            </div>
          </>
        )
      }
    </div>
  );
};
export default PasswordFiled;
