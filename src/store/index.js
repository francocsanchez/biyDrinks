import { configureStore } from "@reduxjs/toolkit";
import drinkSlice from "../features/drink/drinkSlice";

export const store = configureStore({
  reducer: {
    drink: drinkSlice,
  },
});
