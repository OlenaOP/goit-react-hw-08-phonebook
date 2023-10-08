export const List = ({ title, contacts, handleDeleteBook }) => {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}{' '}
              <button
                type="button"
                onClick={() => handleDeleteBook(contact.name)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
