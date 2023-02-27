import React from 'react';
import { Formik, Form } from 'formik';
import { Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <div>
    <Formik>
      <Form>
        <label>
          <Input type="text" value={value} onChange={onChange} />
        </label>
      </Form>
    </Formik>
  </div>
);
