import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import { NotificationManager } from 'react-notifications';

import TextField from 'components/FormInput/Text';
import PasswordField from 'components/FormInput/Password';
import CreditCard from 'components/CreditCard';
import { useCustomerSignUpMutation } from 'graphql/generated';
import { AuthContext } from 'contexts/Auth';
import { ModalContext } from 'contexts/Modal';

const SignUp = () => {
  const [signUp] = useCustomerSignUpMutation();
  const { login } = useContext(AuthContext);
  const { onClose } = useContext(ModalContext);

  return (
    <>
      <Formik
        initialValues={{
          fullname: '',
          username: '',
          password: '',
          creditCardNumber: '',
          csv: '',
        }}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);
          setTimeout(() => {
            signUp({
              variables: {
                data: {
                  ...values,
                  creditCardNumber: Number(values.creditCardNumber),
                  csv: Number(values.csv),
                }
              }
            }).then(({ data }) => {
              if (data?.customerSignUp?.customer) {
                NotificationManager.success(`Welcome ${data.customerSignUp?.customer?.fullname}`, 'SignUp successful !');
                login();
                onClose();
              } else {
                actions.setStatus('Something went wrong, pls try again');
              }
            });
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ isSubmitting, values, status }) => (
          <Form className='flex flex-col'>
            <TextField name="fullname" type="text" label="Full Name" placeholder='thanhminhvu' />
            <TextField name="username" type="text" label="Username" />
            <PasswordField name="password" label="Password" />
            <TextField name="creditCardNumber" type="number" label="Credit Card Number" />
            <TextField name="csv" type="number" label="csv" />

            {
              status && (
                <div className='text-red-600'>{status}</div>
              )
            }

            {
              values.creditCardNumber && (
                <div className='mx-auto intro-x'>
                  <CreditCard name={values.fullname} cardNumber={values.creditCardNumber} csv={values.csv} />
                </div>
              )
            }

            <button type="submit" disabled={isSubmitting}
              className="button inline-block bg-theme-100 text-white mt-5 py-3 text-lg font-bold">
              Submit
            {isSubmitting && <img src="/oval.svg" className='w-4 h-4 ml-2 inline-block' />}
            </button>
          </Form>
        )}
      </Formik>

    </>
  );
};

export default SignUp;
