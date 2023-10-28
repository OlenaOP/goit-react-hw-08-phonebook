import css from './Filter.module.css';

export const Filter = ({ filter, handleChange }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input
          className={css.formInput}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </>
  );
};
