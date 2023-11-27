import { createSelector } from '@reduxjs/toolkit';

const selectPhonebook = state => state.contacts;

export const selectContacts = createSelector(
  selectPhonebook,
  contacts => contacts.contacts.items
);
export const selectContactsIsLoading = createSelector(
  selectPhonebook,
  contacts => contacts.contacts.isLoading
);
export const selectContactsError = createSelector(
  selectPhonebook,
  contacts => contacts.contacts.error
);
export const selectContactsFilter = createSelector(
  selectPhonebook,
  contacts => contacts.filter
);
