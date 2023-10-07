import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drinkSelectedId: {},
  drinksList: [],
  filterType: {},
  filterItem: {},
};

export const drinkSlice = createSlice({
  name: "drink",
  initialState,
  reducers: {
    setDrinksForTipe: (state, action) => {
      state.filterType = action.payload;
    },
    setDrinkSelected: (state, action) => {
      state.drinkSelectedId = action.payload;
    },
    setDriksListItem: (state, action) => {
      state.filterItem = action.payload;
    },
  },
});

export const { setDrinksForTipe, setDrinkSelected, setDriksListItem } =
  drinkSlice.actions;

export default drinkSlice.reducer;
