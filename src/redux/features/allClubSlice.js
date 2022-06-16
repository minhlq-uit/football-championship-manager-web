import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ClubDataService from "../../services/club.js";

export const allClubSlice = createSlice({
  name: "allClub",
  initialState: {

  },
  reducers: {
    clearAllClub: (state, action) => {
      state.allClub = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllClub.fulfilled, (state, action) => {
        state.allClub = action.payload;
      })
  },
});

export const getAllClub = createAsyncThunk(
  "allClub/getAllClub",
  async ({}, { rejectWithValue }) => {
    try {
      const response = await ClubDataService.getAllClub();
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);



export const { clearAllClub } = allClubSlice.actions;
export default allClubSlice.reducer;