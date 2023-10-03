import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drink: {},
  drinksType: [],
};

export const drinkSlice = createSlice({
  name: "drink",
  initialState,
  reducers: {
    setDrinksForTipe: (state, action) => {
      state.drinksType = action.payload;
    },
  },
});

export const { setDrinksForTipe } = drinkSlice.actions;

export default drinkSlice.reducer;
