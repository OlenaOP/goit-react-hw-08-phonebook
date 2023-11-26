import React from 'react';

import { List } from './List/List';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export const App = () => {
  
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
