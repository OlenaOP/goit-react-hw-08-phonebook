import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './ContactsReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
