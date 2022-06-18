import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    darkTheme: localStorage.getItem("dark-mode") || false,
  },
  reducers: {
    onHandleToggleDarkTheme: (state, payload) => {
      if (typeof state.darkTheme === "boolean") {
        if (state.darkTheme) {
          localStorage.setItem("dark-mode", false);
          state.darkTheme = false;
        } else {
          localStorage.setItem("dark-mode", true);
          state.darkTheme = true;
        }
      } else {
        if (state.darkTheme === "true") {
          localStorage.setItem("dark-mode", false);
          state.darkTheme = false;
        } else {
          localStorage.setItem("dark-mode", true);
          state.darkTheme = true;
        }
      }
    },
  },
});

export const selectDarkMode = (state) => {
  const isDarkMode = state.app.darkTheme;
  if (typeof isDarkMode === "boolean") {
    return isDarkMode;
  } else {
    return isDarkMode === "true" ? true : false;
  }
};

export const { onHandleToggleDarkTheme } = appSlice.actions;

export default appSlice.reducer;
