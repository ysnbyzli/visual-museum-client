import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import personSlice from "./personSlice";

export const store = configureStore({
  reducer: {
    persons: personSlice,
    app: appSlice,
  },
});
