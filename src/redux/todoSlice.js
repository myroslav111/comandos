import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodo(state, action) {
      state.todos = [...state.todos, action.payload];
    },
    updateTodo(state, action) {},
    deleteTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { createTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
