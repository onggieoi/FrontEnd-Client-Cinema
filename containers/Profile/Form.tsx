import React from 'react';
import { Form, Formik } from 'formik';

import TextField from 'components/FormInput/Text';
import PasswordField from 'components/FormInput/Password';
import CheckBox from 'components/FormInput/CheckBox';
import Radio from 'components/FormInput/Radio';
import Switch from 'components/FormInput/Switch';
import MultiSelect, { DataType } from 'components/FormInput/Select';

const dataCheckBox = ['Admin', 'User'];
const dataRadio = ['English', 'Japan', 'Korea'];
const dataSelect: DataType[] = [
  { label: 'gud', value: 'gud' },
  { label: 'bad', value: 'bad' },
  { label: 'iz', value: 'iz' },
];

const FormComponent = () => {
  console.log('form');

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        passowrd: '',
        role: ['Admin'],
        book: 'Korea',
        switch: false,
        multiSelect: [],
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.setFieldError('name', 'testing');
          console.log(values);
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col'>
          <TextField name="name" type="text" label="Name" placeholder='john doe' />
          <TextField name="email" type="email" label="Email" placeholder='john@gmail.com' />
          <CheckBox name='role' label='Role' data={dataCheckBox} />
          <Radio name='book' label='What book u like' data={dataRadio} />
          <Switch name='switch' label='isDead?' />
          <MultiSelect name='multiSelect' label='wat u think' data={dataSelect} isMulti={true} />
          <PasswordField name="password" label="Password" />

          <button type="submit" disabled={isSubmitting}
            className="button inline-block bg-theme-1 text-white mt-5">
            Submit
            {isSubmitting && <img src="/oval.svg" className='w-4 h-4 ml-2 inline-block' />}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
