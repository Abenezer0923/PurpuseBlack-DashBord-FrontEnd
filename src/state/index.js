import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "64de0eb0c8b65d5e17c7d79a",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "light" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
