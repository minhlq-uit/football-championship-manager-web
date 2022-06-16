import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GoalDataService from "../../services/goal.js";

export const goalSlice = createSlice({
  name: "goal",
  initialState: {

  },
  reducers: {
    clearGoal: (state, action) => {
      state.goal = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewGoal.fulfilled, (state, action) => {
        state.goal = action.payload;
      })
      .addCase(getGoalByPlayerId.fulfilled, (state, action) => {
        state.goals = action.payload;
      })
  },
});

export const createNewGoal = createAsyncThunk(
  "goal/createNewGoal",
  async ({ typeGoal, goalTime, playerId }, { rejectWithValue }) => {
    try {
      const response = await GoalDataService.createNewGoal(typeGoal, goalTime, playerId);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const getGoalByPlayerId = createAsyncThunk(
  "goal/getGoalByPlayerId",
  async ({ playerId }, { rejectWithValue }) => {
    try {
      const response = await GoalDataService.getGoalByPlayerId(playerId);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);




export const { clearGoal } = goalSlice.actions;
export default goalSlice.reducer;