// import emojiReducer, { fetchEmojis } from '../redux/emojis/emojiSlice';

// describe('emojiReducer', () => {
//   it('should return the initial state', () => {
//     expect(emojiReducer(undefined, {})).toEqual({
//       emojis: [],
//       loading: false,
//       error: null,
//     });
//   });

//   it('should handle fetchEmojis.fulfilled', () => {
//     expect(
//       emojiReducer(
//         {
//           emojis: [],
//           loading: true,
//           error: null,
//         },
//         fetchEmojis.fulfilled([{ id: 1, name: 'smile' }]),
//       ),
//     ).toEqual({
//       emojis: [{ id: 1, name: 'smile' }],
//       loading: false,
//       error: null,
//     });
//   });

//   it('should handle fetchEmojis.rejected', () => {
//     expect(
//       emojiReducer(
//         {
//           emojis: [],
//           loading: true,
//           error: null,
//         },
//         fetchEmojis.rejected(new Error('Failed to fetch emojis')),
//       ),
//     ).toEqual({
//       emojis: [],
//       loading: false,
//       error: 'Failed to fetch emojis',
//     });
//   });
// });

// ---------------------------------------------------------------------------

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
