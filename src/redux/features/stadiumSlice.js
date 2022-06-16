import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StadiumDataService from "../../services/stadium";

export const stadiumSlice = createSlice({
  name: "stadium",
  initialState: {},
  reducers: {
    clearStadium: (state, action) => {
      state.stadium = null;
      state.loading = null
    },
  },

  extraReducers: (builder) => {
    builder
    .addCase(getStadiumById.pending, (state, action) => {
      state.loading = true
    })
      .addCase(getStadiumById.fulfilled, (state, action) => {
        state.loading = false
        state.stadium = action.payload;
      })
      .addCase(createNewStadium.fulfilled, (state, action) => {
        state.stadium = action.payload;
      });
  },
});

export const getStadiumById = createAsyncThunk(
  "stadium/getStadiumById",
  async ({ stadiumId }, { rejectWithValue }) => {
    try {
      const response = await StadiumDataService.getStadiumById(stadiumId);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const createNewStadium = createAsyncThunk(
  "stadium/createNewStadium",
  async ({ name }, { rejectWithValue }) => {
    try {
      const response = await StadiumDataService.createNewStadium(name);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const { clearStadium } = stadiumSlice.actions;
export default stadiumSlice.reducer;
