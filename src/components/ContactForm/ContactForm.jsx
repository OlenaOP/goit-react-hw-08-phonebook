import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/ContactsReducer';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.contacts);
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

    const number = form.elements.number.value;
    dispatch(addContact({ id: nanoid(), name, number }));
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
        Number
        <input
          className={css.formNameInput}
          type="tel"
          name="number"
          required
        />
      </label>
      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
