import React from 'react';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
//model.id = nanoid();

import { List } from './List/List';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, addContact, setFilter } from 'redux/ContactsReducer';

const LS_KEY = 'Contacts';

export const App = () => {
  // const firstVarContacts = [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ];

  const contacts = useSelector(state => state.contacts.contacts);
  const filterQuery = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem(LS_KEY)) ?? firstVarContacts;
  //   //якщо нема даних в локальному сховищі, то встановлюємо початкові значення
  // });
  // const [filterQuery, setFilterQuery] = useState('');

  useEffect(() => {
    // if (prevState.contacts.length !== contacts.length)
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const hasNameDublicate = contacts.some(contact => contact.name === name);
    if (hasNameDublicate) {
      alert(`${name} is already in contacts`);
      return;
    }

    const number = form.elements.number.value;
    dispatch(addContact({ id: nanoid(), name, number }));
    //setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);
    form.reset();
  };

  const handleChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  const handleDelete = contactName => {
    dispatch(deleteContact(contactName));
    // setContacts(prevState =>
    //   prevState.filter(contact => contact.name !== contactName)
    // );
  };

  const dataSearch = (filterQuery, contacts) => {
    return contacts.filter(user => {
      return user.name.toLowerCase().includes(filterQuery.toLowerCase());
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filterQuery} handleChange={handleChange} />
      <List
        title="Contacts"
        contacts={dataSearch(filterQuery, contacts)}
        handleDeleteBook={handleDelete}
      ></List>
    </div>
  );
};
