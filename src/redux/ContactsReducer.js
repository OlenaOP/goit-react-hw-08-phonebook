import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  reducers: {
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.name !== action.payload);
    },
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    // setIsLoading(state, action) {
    //   state.isLoading = action.payload;
    // },
    // setPostDetails(state, action) {
    //   state.postDetailsData = action.payload;
    // },
    // setError(state, action) {
    //   state.error = action.payload;
    // },
    // addPost(state, action) {
    //   // state.posts.push(action.payload);
    //   state.posts = [...state.posts, action.payload];
    // },
    // deletePost(state, action) {
    //   state.posts = state.posts.filter(post => post.id !== action.payload);
    //   // const deletePostIndex = state.posts.findIndex(post => post.id === action.payload);
    //   // state.posts.splice(deletePostIndex, 1);
    // },
  },
});

// Генератори екшенів
export const { deleteContact, addContact, setFilter } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
