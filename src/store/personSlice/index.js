import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPerson } from "../../api/request";

export const fetchAllPerson = createAsyncThunk("persons/all", async () => {
  try {
    const response = await getAllPerson();
    return response.data;
  } catch (error) {}
});

export const personSlice = createSlice({
  name: "persons",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPerson.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(fetchAllPerson.fulfilled, (state, action) => {
      state.data = action.payload.map((person) => ({
        ...person,
        fullName: `${person?.firstName} ${person?.lastName}`,
        category: person?.category,
      }));
      state.loading = false;
    });
    builder.addCase(fetchAllPerson.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const persons = (state) => state.persons.data;

export default personSlice.reducer;
