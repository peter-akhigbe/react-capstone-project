import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import emojiReducer, { fetchEmojis } from '../redux/emojis/emojiSlice';

jest.mock('axios');

describe('emojiSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        emojis: emojiReducer,
      },
    });
  });

  test('initial state', () => {
    expect(store.getState().emojis).toEqual({
      emojis: [],
      loading: false,
      error: null,
    });
  });

  test('fetchEmojis success', async () => {
    const mockData = [
      { id: 1, name: 'smile' },
      { id: 2, name: 'laugh' },
    ];

    axios.get.mockResolvedValueOnce({ data: mockData });

    await store.dispatch(fetchEmojis());

    expect(store.getState().emojis).toEqual({
      emojis: mockData,
      loading: false,
      error: null,
    });
  });

  test('fetchEmojis failure', async () => {
    axios.get.mockRejectedValueOnce(new Error('Failed to fetch emojis'));

    await store.dispatch(fetchEmojis());

    expect(store.getState().emojis).toEqual({
      emojis: [],
      loading: false,
      error: 'Failed to fetch emojis',
    });
  });
});
