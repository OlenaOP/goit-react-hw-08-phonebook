import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, fetchContactsThunk } from 'redux/contactsReducer';
import { selectContacts, selectContactsFilter } from 'redux/contacts.selector';

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
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.phone}{' '}
            <button
              type="button"
              onClick={() => dispatch(deleteContactThunk(contact.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
