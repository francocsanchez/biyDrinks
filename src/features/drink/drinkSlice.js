import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drinks: null,
};

export const drinkSlice = createSlice({
  name: "drink",
  initialState,
  reducers: {},
});

export const { setTipeDrinkSelected } = drinkSlice.actions;

export default drinkSlice.reducer;
