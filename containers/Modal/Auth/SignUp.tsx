import React from 'react';
import { Form, Formik } from 'formik';

import TextField from 'components/FormInput/Text';
import PasswordField from 'components/FormInput/Password';
import RadioField from 'components/FormInput/Radio';

const listGenre = ['Male', 'Female', 'others']

const SignUp = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        genre: '',
        phone: '',
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(true);
        setTimeout(() => {
          actions.setFieldError('email', 'Errro testing');
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col'>
          <TextField name="name" type="text" label="Full Name" placeholder='thanhminhvu' />
          <TextField name="phone" type="text" label="Phone Number" placeholder='+84944758412' />
          <RadioField name='genre' label='Genre' data={listGenre} />
          <TextField name="email" type="text" label="Email" placeholder='example@gmail.com' />
          <PasswordField name="password" label="Password" />

          <button type="submit" disabled={isSubmitting}
            className="button inline-block bg-theme-100 text-white mt-5 py-3">
            Submit
            {isSubmitting && <img src="/oval.svg" className='w-4 h-4 ml-2 inline-block' />}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
