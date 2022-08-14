import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodo(state, action) {},
    updateTodo(state, action) {},
    deleteTodo(state, action) {},
  },
});

export const { createTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
