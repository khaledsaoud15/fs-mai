import { createSlice } from "@reduxjs/toolkit";

const todoRedux = createSlice({
  name: "todo",
  initialState: {
    arr: [],
  },

  reducers: {
    addTodo: (state, action) => {
      state.arr = [...state.arr, action.payload];
    },
    deleteTodo: (state, action) => {
      state.arr.splice(action.payload, 1);
    },
  },
});

export default todoRedux.reducer;
export const { addTodo, deleteTodo } = todoRedux.actions;
