import axios from 'axios';

const phonebookInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  phonebookInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRegister = async formData => {
  // formData - {email: "adwad@gmail.com", password: "123456788", name: "Oleg"}
  const { data } = await phonebookInstance.post('/users/signup', formData);
  setToken(data.token);

  return data;
};

export const requestLogin = async formData => {
  // formData - {email: "adwad@gmail.com", password: "123456788"}
  const { data } = await phonebookInstance.post('/users/login', formData);
  setToken(data.token);

  return data;
};

export const requestLogout = async () => {
  const { data } = await phonebookInstance.post('/users/logout');

  return data;
};

export const requestRefreshUser = async () => {
  const { data } = await phonebookInstance.get('/users/current');

  return data;
};

export const requestAllContacts = async () => {
  const { data } = await phonebookInstance.get('/contacts');

  return data;
};

export const requestAddContact = async newContact => {
  const { data } = await phonebookInstance.post('/contacts', newContact);

  return data;
};

export const requestDeleteContact = async contactId => {
  const { data } = await phonebookInstance.delete(`/contacts/${contactId}`);

  return data;
};

// import axios from 'axios';

// const contactsInstance = axios.create({
//   baseURL: 'https://656267d5ee04015769a665c6.mockapi.io/contacts/',
// });

// export const fetchContacts = async () => {
//   const { data } = await contactsInstance.get('/contacts/');
//   return data;
// };

// export const addContact = async newContact => {
//   const { data } = await contactsInstance.post('/contacts/', newContact);
//   return data;
// };

// export const deleteContact = async contactId => {
//   const { data } = await contactsInstance.delete(`/contacts/${contactId}`);
//   return data;
// };
