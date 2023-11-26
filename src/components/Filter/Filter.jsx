import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsReducer';
import { selectContactsFilter } from 'redux/contacts.selector';

export const Filter = () => {
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  return (
    <>
      <label>
        Find contacts by name
        <input
          className={css.formInput}
          type="text"
          name="filter"
          value={filter}
          onChange={evt => dispatch(setFilter(evt.target.value))}
        />
      </label>
    </>
  );
};
