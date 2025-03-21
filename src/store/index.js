import { configureStore } from '@reduxjs/toolkit';

import todoReducer from '@/store/todo.js';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
