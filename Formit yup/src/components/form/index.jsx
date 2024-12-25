import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid'
import axios from 'axios';

const BASE_URL = "https://northwind.vercel.app/api/categories";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  description: Yup.string().required('Required'),
});

export const FormComponent = () => (
  <div>
    <h1>Add Category</h1>
    <Formik
      initialValues={{
        name: '',
        description: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        // same shape as initial values
        
        await axios.post(BASE_URL,values)
        
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" type = "text" />
          {errors.name && touched.name ? (
            <div>{errors.name}</div>
          ) : null}
          <Field name="description" type="text" />
          {errors.description && touched.description ? <div>{errors.description}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);