import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const create = createAsyncThunk('contact/create', async credentials => {
  try {
    const { data } = await axios.post('/contacts', credentials);
    return data;
  } catch (error) {}
});

const deleteContact = createAsyncThunk('contact/delete', async credentials => {
  try {
    await axios.delete(`/contacts/${credentials}`);
  } catch (error) {}
});

const fetchContacts = createAsyncThunk(
  'contacts/fecth',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persitedToken = state.authReducer.token;

    if (persitedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persitedToken);

    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      // show error
    }
  },
);

const operationsContact = {
  create,
  fetchContacts,
  deleteContact,
};

export default operationsContact;
