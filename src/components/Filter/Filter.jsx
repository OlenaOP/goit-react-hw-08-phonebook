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

// import React from 'react';

// export default ({ term, data, update }) => {
//   const dataSearch = e => {
//     const value = e.target.value.toLowerCase();

//     const filter = data.filter(user => {
//       return user.name.toLowerCase().includes(value);
//     });

//     update({
//       data: filter,
//       active: 0,
//       term: value,
//     });
//   };

//   return (
//     <div className="searchbar form-group">
//       <input
//         value={term}
//         type="text"
//         className="form-control"
//         placeholder="Search people by name..."
//         onChange={dataSearch}
//       />
//     </div>
//   );
// };
