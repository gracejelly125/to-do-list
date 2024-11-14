// src/redux/slices/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const { id, finished } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.finished = finished;
        console.log("Updated Todo:", todo);  
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
