import React from 'react';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => console.log(onDeleteContact(id))}
            >
              видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
