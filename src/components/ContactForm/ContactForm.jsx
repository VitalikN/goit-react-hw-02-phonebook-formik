import React from 'react';
import { Formik, Form } from 'formik';
import shortid from 'shortid';
import { Btn, Input } from './ContactForm.styled';

import { BsFillPersonPlusFill } from 'react-icons/bs';

const initialValues = {
  name: '',
  number: '',
};
export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        onAddContact({ ...values, id: shortid.generate() });

        resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Btn type="submit">
          <BsFillPersonPlusFill />
        </Btn>
      </Form>
    </Formik>
  );
};
