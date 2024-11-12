import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("finishedTodos")) || [];

const doneSlice = createSlice({
  name: "done",
  initialState,
  reducers: {
    addFinishedTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteFinishedTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addFinishedTodo, deleteFinishedTodo } = doneSlice.actions;
export default doneSlice.reducer;
