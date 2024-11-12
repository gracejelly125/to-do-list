import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const workingSlice = createSlice({
  name: "working",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo} = workingSlice.actions;
export default workingSlice.reducer;