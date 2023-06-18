import { createSlice } from "@reduxjs/toolkit";

const initState = {
  count: 0,
};

const slice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increaseCount(state) {
      state.count++;
    },
    decreaseCount(state) {
      state.count--;
    },
  },
});

export const { increaseCount, decreaseCount } = slice.actions;
export default slice.reducer;
