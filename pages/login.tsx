import React, { useContext } from 'react';
import Head from 'next/head';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import nProgress from 'nprogress';

import Container from 'components/Container';

const initialSignIn = {
  email: '',
  password: '',
};

const Login = () => {

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Email is required'),
    password: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: initialSignIn,
    validationSchema: SignInSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      nProgress.start();
      console.log(values);
    },
  });

  const errorClass = (fieldname: string) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return 'border-red-500';
    }
    return '';
  };

  return (
    <Container>
      <Head>
        <title>Signin</title>
      </Head>
      <div className='mt-3'>
        <img className='max-w-xs mx-auto' src="/logo_dalat.png" alt="" />
      </div>
      <div className="w-full max-w-3xl m-auto mt-8">
        <form onSubmit={formik.handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className='text-center block text-gray-700 text-4xl font-bold mb-2'>Login</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-2xl font-bold mb-2" >Username</label>
            <input onChange={formik.handleChange}
              className={`shadow appearance-none border
              rounded w-full py-2 px-3 text-gray-700
              leading-7 focus:outline-none focus:shadow-outline ${errorClass('username')}`}
              name='email' type="email" placeholder="Username" />
            {
              formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xl italic">{formik.errors.email}.</p>
              )
            }
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-2xl font-bold mb-2">Password</label>
            <input onChange={formik.handleChange}
              className={`shadow appearance-none border
              rounded w-full py-2 px-3 text-gray-700 mb-3 leading-7
              focus:outline-none focus:shadow-outline ${errorClass('password')}`}
              name="password" type="password" />
            {
              formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xl italic">{formik.errors.password}.</p>
              )
            }
            {
              formik.status && (
                <p className="text-red-500 text-xl italic">{formik.status}</p>
              )
            }
          </div>
          <div className="flex items-center justify-between">
            <button disabled={formik.isSubmitting}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
              rounded focus:outline-none focus:shadow-outline mx-auto text-lg" type='submit'>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
