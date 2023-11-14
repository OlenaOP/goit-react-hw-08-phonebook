import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/ContactsReducer';

export const Filter = () => {
  
  const filter = useSelector(state => state.contacts.filter);
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
