import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  emojis: [],
  loading: false,
  error: null,
};

export const fetchEmojis = createAsyncThunk('emojis/fetchEmojis', async () => {
  try {
    const response = await axios.get('https://emojihub.yurace.pro/api/all');
    const array = response.data.slice(0, 100);

    array.forEach((item, index) => {
      item.id = index + 1;
    });

    return array;
  } catch (error) {
    throw new Error('Failed to fetch emojis');
  }
});

const emojiSlice = createSlice({
  name: 'emojis',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmojis.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmojis.fulfilled, (state, action) => {
        state.emojis = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchEmojis.rejected, (state, action) => {
        state.emojis = [];
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default emojiSlice.reducer;
