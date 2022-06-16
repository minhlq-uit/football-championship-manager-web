import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PlayerDataService from "../../services/player";

export const playerSlice = createSlice({
  name: "player",
  initialState: {

  },
  reducers: {
    clearPlayer: (state, action) => {
      state.player = null
      state.players = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewPlayer.fulfilled, (state, action) => {
        state.player = action.payload;
      })
      .addCase(getPlayerById.fulfilled, (state, action) => {
        state.player = action.payload;
      })
      .addCase(getPlayerByClubId.fulfilled, (state, action) => {
        state.players = action.payload;
      })
      .addCase(getAllPlayer.fulfilled, (state, action) => {
        state.players = action.payload;
      })
  },
});
export const getAllPlayer = createAsyncThunk(
  "player/getAllPlayer",
  async ( {}, { rejectWithValue }) => {
    try {
      const response = await PlayerDataService.getAllPlayer();
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const createNewPlayer = createAsyncThunk(
  "player/createNewPlayer",
  async ({ name, birth, type, clubId }, { rejectWithValue }) => {
    try {
      const response = await PlayerDataService.createNewPlayer(name, birth, type, clubId);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const getPlayerByClubId = createAsyncThunk(
  "player/getPlayerByClubId",
  async ({ clubId }, { rejectWithValue }) => {
    try {
      const response = await PlayerDataService.getPlayerByClubId(clubId);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const getPlayerById = createAsyncThunk(
  "player/getPlayerById",
  async ({ playerId }, { rejectWithValue }) => {
    try {
      const response = await PlayerDataService.getPlayerById(playerId);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);



export const { clearPlayer } = playerSlice.actions;
export default playerSlice.reducer;