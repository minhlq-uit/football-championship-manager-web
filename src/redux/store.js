import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import clubReducer from "./features/clubSlice";
import stadiumReducer from "./features/stadiumSlice";
import playerReducer from "./features/playerSlice";
import allClubReducer from "./features/allClubSlice";
import matchReducer from "./features/matchSlice";
import matchDetailsReducer from "./features/matchDetailsSlice";
import standingReducer from "./features/standingSlice";
import goalReducer from "./features/goalSlice";
import parameterReducer from "./features/parameterSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    club: clubReducer,
    stadium: stadiumReducer,
    player: playerReducer,
    allClub: allClubReducer,
    match: matchReducer,
    matchDetails: matchDetailsReducer,
    standing: standingReducer,
    goal: goalReducer,
    parameter: parameterReducer,
  },
});
