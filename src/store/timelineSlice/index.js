import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEventsByPersonId } from "../../api/request";

export const fetchEventsByPersonId = createAsyncThunk(
  "timeline/get",
  async (id) => {
    try {
      const response = await getEventsByPersonId(id);
      return response.data;
    } catch (error) {}
  }
);

export const timelineSlice = createSlice({
  name: "timeline",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEventsByPersonId.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(fetchEventsByPersonId.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchEventsByPersonId.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default timelineSlice.reducer;
