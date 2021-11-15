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

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    console.log(data);
    return data;
  } catch (error) {
    //   show error
  }
});

const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue();
    }
  },
);

const logout = createAsyncThunk('auth/logout', async credentials => {
  try {
    await axios.post('/users/logout', credentials);
    token.unset();
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persitedToken = state.authReducer.token;

    if (persitedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persitedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      // show error
    }
  },
);

const operationsAuth = {
  register,
  login,
  logout,
  fetchCurrentUser,
};

export default operationsAuth;
