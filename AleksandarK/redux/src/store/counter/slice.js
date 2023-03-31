import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  preformCounterReset: () => {},
};

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    addAmmount: (state, payload) => {
      state.value += Number(payload.payload);
    },

    reset: (state) => {
      state.value = 0;
    },
    ...middlewareActions,
  },
});

export const { increment, decrement, addAmmount, reset, preformCounterReset } =
  counterSlice.actions;

export default counterSlice.reducer;
