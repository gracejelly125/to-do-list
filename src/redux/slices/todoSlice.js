// src/redux/slices/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = () => JSON.parse(localStorage.getItem("todos")) || [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const { id, finished } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.finished = finished;
        console.log("UpdatedTodo:", todo);  
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
