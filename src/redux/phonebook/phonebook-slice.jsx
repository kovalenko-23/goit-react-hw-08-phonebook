import { createSlice } from '@reduxjs/toolkit';
import operationsContact from './phonebook-operations';

const initialState = {
  contact: { name: null, number: null },
  contacts: [],
};

const phonebookSlice = createSlice({
  name: 'contact',
  initialState,
  extraReducers: {
    [operationsContact.create.fulfilled](state, action) {
      state.contact = action.payload;
    },
    [operationsContact.fetchContacts.fulfilled](state, action) {
      state.contacts = [...action.payload];
    },
  },
});

export default phonebookSlice.reducer;
