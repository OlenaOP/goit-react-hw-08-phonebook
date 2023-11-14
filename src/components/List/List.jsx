import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/ContactsReducer';

export const List = () => {
  const allContacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const dataSearch = (filterQuery, contacts) => {
    return contacts.filter(user => {
      return user.name.toLowerCase().includes(filterQuery.toLowerCase());
    });
  };

  const contacts = dataSearch(filter, allContacts);

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <button
              type="button"
              onClick={() => dispatch(deleteContact(contact.name))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
