import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  placeholder?: string;
  name: string;
};

const SwitchField: React.FC<InputFieldProps> = (props) => {
  const [field, { error, touched, value }] = useField(props);

  return (
    <div className='mb-3'>
      <label>{props.label}: </label>
      <div>
        <input type='checkbox' className='input input--switch border' {...field} {...props} checked={value} />
      </div>
      {
        touched && error ? (
          <span className='text-theme-6 text-center ml-5'>{error}</span>
        ) : null
      }
    </div>
  );
};
export default SwitchField;
