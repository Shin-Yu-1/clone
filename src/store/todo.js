import { createSlice } from '@reduxjs/toolkit';

const loadTodos = () => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : [];
};

const saveTodos = todos => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: loadTodos(),
  reducers: {
    todoAdded: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      });
      saveTodos(state);
    },
    todoReset: state => {
      state = [];
      saveTodos(state);
    },
    todoRemoved: (state, action) => {
      const newState = state.filter(todo => todo.id !== action.payload.id);
      saveTodos(newState);
      return newState;
    },
    todoChanged: (state, action) => {
      const { id, text, completed } = action.payload;
      const todo = state.find(todo => todo.id === id);

      if (todo) {
        if (text !== undefined) {
          todo.text = text;
        }

        if (completed !== undefined) {
          todo.completed = completed;
        }
      }

      saveTodos(state);
    },
    todoReordered: (state, action) => {
      const { fromIndex, toIndex } = action.payload;

      if (fromIndex >= 0 && toIndex >= 0 && fromIndex < state.length && toIndex < state.length) {
        const [todo] = state.splice(fromIndex, 1);
        state.splice(toIndex, 0, todo);
      }

      saveTodos(state);
    },
  },
});

export const { todoAdded, todoChanged, todoRemoved } = todoSlice.actions;

export default todoSlice.reducer;
