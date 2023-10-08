import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drinkSelectedId: {},
  filterType: {},
  filterItem: {},
  listBuyIngredients: [],
};

export const drinkSlice = createSlice({
  name: "drink",
  initialState,
  reducers: {
    setDrinkSelected: (state, action) => {
      state.drinkSelectedId = action.payload;
    },
    setDrinksForTipe: (state, action) => {
      state.filterType = action.payload;
    },
    setDrinksListItem: (state, action) => {
      state.filterItem = action.payload;
    },
    setListBuyIngredientes: (state, action) => {
      state.listBuyIngredients.push(action.payload);
    },
  },
});

export const {
  setDrinksForTipe,
  setDrinkSelected,
  setDrinksListItem,
  setListBuyIngredientes,
} = drinkSlice.actions;

export default drinkSlice.reducer;
