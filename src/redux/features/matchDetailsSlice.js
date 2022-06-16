import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MatchDetailsDataService from "../../services/matchDetails";

export const matchDetailsSlice = createSlice({
  name: "matchDetails",
  initialState: {

  },
  reducers: {
    clearMatchDetails: (state, action) => {
      state.matchDetails = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewMatchDetail.fulfilled, (state, action) => {
        state.matchDetails = action.payload;
      })
      .addCase(getMatchDetailById.fulfilled, (state, action) => {
        state.matchDetails = action.payload;
      })
  },
});

export const createNewMatchDetail = createAsyncThunk(
  "matchDetails/createNewMatchDetail",
  async ({ club1Goal, club2Goal, club1Id, club2Id, matchId }, { rejectWithValue }) => {
    try {
      const response = await MatchDetailsDataService.createNewMatchDetail(club1Goal, club2Goal, club1Id, club2Id, matchId);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const getMatchDetailById = createAsyncThunk(
  "matchDetails/getMatchDetailById",
  async ({ matchId }, { rejectWithValue }) => {
    try {
      const response = await MatchDetailsDataService.getMatchDetailById(matchId);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);




export const { clearGoal } = matchDetailsSlice.actions;
export default matchDetailsSlice.reducer;