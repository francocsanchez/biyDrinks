import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drinkSelectedId: {},
  drinksType: [],
};

export const drinkSlice = createSlice({
  name: "drink",
  initialState,
  reducers: {
    setDrinksForTipe: (state, action) => {
      state.drinksType = action.payload;
    },
    setDrinkSelected: (state, action) => {
      state.drinkSelectedId = action.payload;
    },
  },
});

export const { setDrinksForTipe, setDrinkSelected } = drinkSlice.actions;

export default drinkSlice.reducer;
