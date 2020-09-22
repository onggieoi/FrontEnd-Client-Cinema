import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  placeholder?: string;
  name: string;
};

const TextField: React.FC<InputFieldProps> = (props) => {
  const [field, { error, touched }] = useField(props);

  const validateClass = () => {
    if (touched && error) {
      return 'border-theme-6';
    }
    return '';
  };

  return (
    <div className='mb-3'>
      <label>{props.label}: </label>
      <input className={`input w-full border mt-2 ${validateClass()}`} {...field} {...props} />
      {
        touched && error ? (
          <span className='text-theme-6 text-center ml-5'>{error}</span>
        ) : null
      }
    </div>
  );
};
export default TextField;
