import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoAdded: (state, action) => {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    },
    todoRemoved: (state, action) => state.filter(todo => todo.id !== action.payload.id),
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
    },
    todoReordered: (state, action) => {
      const { fromIndex, toIndex } = action.payload;
      const [todo] = state.splice(fromIndex, 1);
      state.splice(toIndex, 0, todo);
    },
  }
});

export const { todoAdded, todoRemove } = todoSlice.actions;

export default todoSlice.reducer;