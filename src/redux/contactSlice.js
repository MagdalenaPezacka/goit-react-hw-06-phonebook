import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {items:[]};

const setLocalStorage = contacts => {
  localStorage.setItem(contacts, JSON.stringify(contacts));
};

const contactSlice = createSlice({
  name: 'phone',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
      setLocalStorage([...state.items]);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
      setLocalStorage([...state.items]);
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;

