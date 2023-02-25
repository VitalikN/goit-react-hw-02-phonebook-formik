import React, { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './Сontacts/Сontacts';
import contacts from './contacts.json';
import { Filter } from './Filter/filter';

export class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };
  addContact = newContact => {
    this.state.contacts.filter(
      contact =>
        contact.name === newContact.name || contact.number === newContact.number
    ).length
      ? alert(`${newContact.name}: is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
    console.log(contacts);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  filterContacts = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };
  onFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filterContacts;
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.filterContacts} />
        <ContactList
          contacts={this.onFilterContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
