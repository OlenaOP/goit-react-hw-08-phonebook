import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, fetchContactsThunk } from 'redux/contacts.reducer';
import { selectContacts, selectContactsFilter } from 'redux/contacts.selector';

import css from './List.module.css';

export const List = () => {
  const allContacts = useSelector(selectContacts);
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  const dataSearch = (filterQuery, contacts) => {
    return contacts.filter(user => {
      return user.name.toLowerCase().includes(filterQuery.toLowerCase());
    });
  };

  const contacts = dataSearch(filter, allContacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <div className={css.wrapper}>
              <p className={css.text}>
                {contact.name}: {contact.number}
              </p>
              <button
                type="button"
                className={css.button}
                onClick={() => dispatch(deleteContactThunk(contact.id))}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
