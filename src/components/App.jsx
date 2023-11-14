import React from 'react';

import { List } from './List/List';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export const App = () => {
  // const firstVarContacts = [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ];

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem(LS_KEY)) ?? firstVarContacts;
  //   //якщо нема даних в локальному сховищі, то встановлюємо початкові значення
  // });
  // const [filterQuery, setFilterQuery] = useState('');

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <h2>Contacts</h2>
      <List />
    </div>
  );
};
