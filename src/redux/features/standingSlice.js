import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StandingDataService from "../../services/standing";

export const standingSlice = createSlice({
  name: "standing",
  initialState: {

  },
  reducers: {
    clearStanding: (state, action) => {
    //   state.club = null
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getStanding.fulfilled, (state, action) => {
      state.standing = action.payload;
    })
      .addCase(createNewClubToStanding.fulfilled, (state, action) => {
        state.success = action.payload;
      })
      .addCase(updateStandingAfterMatch.fulfilled, (state, action) => {
        state.success = action.payload;
      })
  },
});
export const getStanding = createAsyncThunk(
  "standing/getStanding",
  async ({  }, { rejectWithValue }) => {
    try {
      const response = await StandingDataService.getStanding();
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const createNewClubToStanding = createAsyncThunk(
  "standing/createNewClubToStanding",
  async ({ clubId }, { rejectWithValue }) => {
    try {
      const response = await StandingDataService.createNewClubToStanding(clubId);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const updateStandingAfterMatch = createAsyncThunk(
  "standing/updateStandingAfterMatch",
  async ({ club1Id, club2Id, club1Goal, club2Goal }, { rejectWithValue }) => {
    try {
      const response = await StandingDataService.updateStandingAfterMatch(club1Id, club2Id, club1Goal, club2Goal);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);



export const { clearStanding } = standingSlice.actions;
export default standingSlice.reducer;