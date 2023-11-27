import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { List } from 'components/List/List';
import React from 'react';

const ContactsPage = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <h2>Contacts</h2>
      {<List />}
    </div>
  );
};

export default ContactsPage;
