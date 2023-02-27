import React from 'react';
import { List, Item, Btn } from './ContactList.styled';

import { BsFillPersonXFill } from 'react-icons/bs';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <Btn type="button" onClick={() => onDeleteContact(id)}>
              <BsFillPersonXFill />
            </Btn>
          </Item>
        ))}
      </List>
    </div>
  );
};
