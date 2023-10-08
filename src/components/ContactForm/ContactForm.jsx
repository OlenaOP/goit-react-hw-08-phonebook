import css from './ContactForm.module.css';

export const ContactForm = ({ handleSubmit }) => {
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
