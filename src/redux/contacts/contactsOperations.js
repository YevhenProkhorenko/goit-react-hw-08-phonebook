// import * as api from 'shared/api/contacts'
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkApi) => {
    try {
      const result = await axios.get('/contacts');
      return result.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, thunkApi) => {
    try {
      const result = await axios.post('/contacts', data);
      return result.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, thunkApi) => {
    try {
      const result = await axios.delete(`/contacts/${id}`);
      return result.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const updateContact = createAsyncThunk(
  'contacts/update',
  async (id, thunkApi) => {
    try {
      const result = await axios.patch(`/contacts/${id}`);
      return result.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
