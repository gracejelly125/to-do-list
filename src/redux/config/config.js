import { configureStore } from "@reduxjs/toolkit";
import workingSlice from "../slices/workingSlice";
import doneSlice from "../slices/doneSlice";

const store = configureStore({
  reducer: {
    working: workingSlice,
    done: doneSlice,
  },
});

export default store;
