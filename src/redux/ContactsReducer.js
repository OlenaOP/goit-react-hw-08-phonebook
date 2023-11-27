import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  // fetchContacts,
  // addContact,
  // deleteContact,
  requestAllContacts,
  requestAddContact,
  requestDeleteContact,
} from 'services/api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await requestAllContacts();

      return contacts; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const contact = await requestAddContact(newContact);

      return contact; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const deletedContact = await requestDeleteContact(contactId);
      // console.log('deletedContact', deletedContact);
      return deletedContact; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder

      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })

      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.unshift(action.payload);
        // state.products = [action.payload, ...state.products];
        // state.products.push(action.payload);
      })

      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
      })

      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          addContactThunk.pending,
          deleteContactThunk.pending
        ),
        state => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          addContactThunk.rejected,
          deleteContactThunk.rejected
        ),
        (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.error = action.payload;
        }
      ),
});

// Генератори екшенів
export const { setFilter } = contactsSlice.actions;
// Редюсер слайсу
export const contactReducer = contactsSlice.reducer;
