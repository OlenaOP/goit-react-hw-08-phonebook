import React, { Component } from 'react';
import { nanoid } from 'nanoid';
//model.id = nanoid();

import { List } from './List/List';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
//import css from './App.module.css';
const LS_KEY = 'Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const stringifiedContacts = localStorage.getItem(LS_KEY);
    const parseContacts = JSON.parse(stringifiedContacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    console.log(prevState.contacts.length);
    console.log(this.state.contacts.length);
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const hasNameDublicate = this.state.contacts.some(
      contact => contact.name === name
    );
    if (hasNameDublicate) {
      alert(`${name} is already in contacts`);
      return;
    }
    const number = form.elements.number.value;
    const nameID = nanoid();
    const arr = this.state.contacts;
    arr.push({
      id: nameID,
      name: name,
      number: number,
    });
    console.log(arr);
    console.log(name, nameID, number);
    this.setState({ contacts: arr });
    //localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    form.reset();
  };

  handleChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  handleDelete = contactName => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.name !== contactName
        ),
      };
    });
  };

  render() {
    const filter = this.state.filter;

    const dataSearch = (filter, contacts) => {
      return contacts.filter(user => {
        return user.name.toLowerCase().includes(filter.toLowerCase());
      });
    };

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange} />
        <List
          title="Contacts"
          contacts={dataSearch(filter, this.state.contacts)}
          handleDeleteBook={this.handleDelete}
          // contacts={this.state.contacts.filter(user => {
          //   return user.name.toLowerCase().includes(filter.toLowerCase());
          // })}
        ></List>
      </div>
    );
  }
}
