import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';
import Select from 'react-select';

export type DataType = {
  value: string;
  label: string;
};

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  data: DataType[];
  isMulti: boolean;
};

const MultiSelectField: React.FC<InputFieldProps> = (props) => {
  const [, {
    error, touched, value,
  }, { setValue }] = useField(props);

  return (
    <div className='mb-3'>
      <label>{props.label}: </label>
      <Select
        isMulti={props.isMulti}
        name={props.name}
        options={props.data}
        className="basic-multi-select"
        classNamePrefix="select"
        value={value}
        onChange={(val) => setValue(val)}
      />
      {
        touched && error ? (
          <span className='text-theme-6 text-center ml-5'>{error}</span>
        ) : null
      }
    </div>
  );
};
export default MultiSelectField;
