import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contactsReducer';

import css from './ContactForm.module.css';
import { selectContacts } from 'redux/contacts.selector';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const hasNameDublicate = contacts.some(contact => contact.name === name);
    if (hasNameDublicate) {
      alert(`${name} is already in contacts`);
      return;
    }

    const number = form.elements.phoneNumber.value;
    dispatch(addContactThunk({ name, number }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          className={css.formNameInput}
          required
          // value={this.state.name}
          // onChange={(e) => this.setState({ name: e.target.value })}
        />
      </label>
      <label>
        Phone number
        <input
          className={css.formNameInput}
          type="tel"
          name="phoneNumber"
          required
        />
      </label>
      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
