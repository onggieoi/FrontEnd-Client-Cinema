import React from 'react';
import { Form, Formik } from 'formik';

import TextField from 'components/FormInput/Text';
import PasswordField from 'components/FormInput/Password';

const SignIn = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        setTimeout(() => {
          actions.setFieldError('email', 'testing');
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col'>
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

export default SignIn;
