import { configureStore } from "@reduxjs/toolkit";
import personSlice from "./personSlice";

export const store = configureStore({
  reducer: {
    persons: personSlice,
  },
});
