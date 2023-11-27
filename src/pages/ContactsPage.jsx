import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { List } from 'components/List/List';
import React from 'react';

const ContactsPage = () => {
  return (
    <div>
      <h1>Add new contact to Phonebook</h1>
      <ContactForm />
      <h2>Find contact</h2>
      <Filter />
      <h2>My contacts</h2>
      {<List />}
    </div>
  );
};

export default ContactsPage;
