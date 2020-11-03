import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import { NotificationManager } from 'react-notifications';

import TextField from 'components/FormInput/Text';
import PasswordField from 'components/FormInput/Password';
import { useCustomerSignInMutation } from 'graphql/generated';
import { AuthContext } from 'contexts/Auth';
import { ModalContext } from 'contexts/Modal';

const SignIn = () => {
  const [customerSignInMutation, { loading }] = useCustomerSignInMutation();
  const { login } = useContext(AuthContext);
  const { onClose } = useContext(ModalContext);

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        setTimeout(() => {
          customerSignInMutation({
            variables: {
              data: values,
            }
          }).then(({ data }) => {
            if (data?.customerSignIn?.customer) {
              NotificationManager.success(`Welcome back ${data.customerSignIn.customer.fullname}`, 'Login successful !');
              login();
              onClose();
            } else {
              actions.setStatus('Invalid Username or password')
            }
          });

          actions.setSubmitting(false);
        }, 1000);

      }}
    >
      {({ isSubmitting, status }) => (
        <Form className='flex flex-col'>
          <TextField name="username" type="text" label="Username" />
          <PasswordField name="password" label="Password" />

          {
            status && (
              <div className='text-red-600'>{status}</div>
            )
          }

          <button type="submit" disabled={isSubmitting}
            className="button inline-block bg-theme-100 text-white mt-5 py-3 font-bold text-lg">
            Submit
            {(isSubmitting || loading) && <img src="/oval.svg" className='w-4 h-4 ml-2 inline-block' />}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
