import { configureStore } from '@reduxjs/toolkit';
import emojisReducer from './emojis/emojiSlice';

const store = configureStore({
  reducer: {
    emojis: emojisReducer,
  },
});

export default store;
