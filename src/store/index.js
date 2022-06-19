import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import personSlice from "./personSlice";
import timelineSlice from "./timelineSlice";

export const store = configureStore({
  reducer: {
    persons: personSlice,
    app: appSlice,
    timeline: timelineSlice,
  },
});
