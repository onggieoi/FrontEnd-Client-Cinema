import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  data: string[];
};

const CheckBoxField: React.FC<InputFieldProps> = (props) => {
  const [field, { error, touched, value }] = useField(props);

  return (
    <div className='mb-3'>
      <label>{props.label}: </label>
      <div className="flex flex-col sm:flex-row">
        {
          props.data.map((item) => (
            <div key={item} className="flex items-center text-gray-700 mr-3">
              <input {...field} {...props} type="checkbox" className="input border mr-1"
                id={item} value={item} checked={value.includes(item)} />
              <label className="cursor-pointer select-none" htmlFor={item}>
                {item}
              </label>
            </div>
          ))
        }
      </div>
      {
        touched && error ? (
          <span className='text-theme-6 text-center ml-5'>{error}</span>
        ) : null
      }
    </div>
  );
};
export default CheckBoxField;
