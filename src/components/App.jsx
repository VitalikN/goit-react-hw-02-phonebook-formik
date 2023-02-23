import React, { Component } from 'react';
import shortid from 'shortid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './Сontacts/Сontacts';
import contacts from './contacts.json';

export class App extends Component {
  state = {
    contacts: contacts,
  };
  addContact = values => {
    const newContact = {
      id: shortid.generate(),
    };

    this.state.contacts.filter(contact => contact.name === values.name).length
      ? alert(`${newContact.name}: is already in contacts`)
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
    console.log(contacts);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div>
        <ContactForm onAddContact={this.addContact} />
        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
