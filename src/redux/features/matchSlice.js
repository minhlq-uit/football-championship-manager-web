import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MatchDataService from "../../services/match.js";

export const matchSlice = createSlice({
  name: "match",
  initialState: {

  },
  reducers: {
    clearMatch: (state, action) => {
      state.match = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewMatch.fulfilled, (state, action) => {
        state.match = action.payload;
      })
      .addCase(getMatchByMatchName.fulfilled, (state, action) => {
        state.match = action.payload;
      })
  },
});

export const createNewMatch = createAsyncThunk(
  "match/createNewMatch",
  async ({ matchName, timeStart, date, stadiumId }, { rejectWithValue }) => {
    try {
      const response = await MatchDataService.createNewMatch(matchName, timeStart, date, stadiumId);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const getMatchByMatchName = createAsyncThunk(
  "match/getMatchByMatchName",
  async ({ matchName}, { rejectWithValue }) => {
    try {
      const response = await MatchDataService.getMatchByMatchName(matchName);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);




export const { clearMatch } = matchSlice.actions;
export default matchSlice.reducer;