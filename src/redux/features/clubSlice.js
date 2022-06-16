import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ClubDataService from "../../services/club.js";

export const clubSlice = createSlice({
  name: "club",
  initialState: {

  },
  reducers: {
    clearClub: (state, action) => {
      state.club = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewClub.fulfilled, (state, action) => {
        state.club = action.payload;
      })
  },
});

export const createNewClub = createAsyncThunk(
  "club/createNewClub",
  async ({ name, stadiumId }, { rejectWithValue }) => {
    try {
      const response = await ClubDataService.createNewClub(name, stadiumId);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);




export const { clearClub } = clubSlice.actions;
export default clubSlice.reducer;