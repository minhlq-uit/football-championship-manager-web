import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ParameterService from "../../services/parameter.js";

export const parameterSlice = createSlice({
  name: "parameter",
  initialState: {},
  reducers: {
    clearParameter: (state, action) => {
      state.parameter = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllParameters.fulfilled, (state, action) => {
        state.parameter = action.payload;
      })
      .addCase(updateParameter.fulfilled, (state, action) => {
        state.parameter = action.payload;
      })
      .addCase(getParameterById.fulfilled, (state, action) => {
        if (action.payload.nameParameter === "minAge") {
          state.parameterMinAge = action.payload.value;
        }
        if (action.payload.nameParameter === "minPlayerOfTeam") {
          state.parameterMinPlayerOfTeam = action.payload.value;
        }
      });
  },
});

export const getAllParameters = createAsyncThunk(
  "parameter/getAllParameters",
  async ({}, { rejectWithValue }) => {
    try {
      const response = await ParameterService.getAllParameters();
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const getParameterById = createAsyncThunk(
  "parameter/getParameterById",
  async ({ parameterId }, { rejectWithValue }) => {
    try {
      const response = await ParameterService.getParameterById(parameterId);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const updateParameter = createAsyncThunk(
  "parameter/updateParameter",
  async ({ parameterId, nameParameter, value }, { rejectWithValue }) => {
    try {
      const response = await ParameterService.updateParameter(
        parameterId,
        nameParameter,
        value
      );
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const { clearParameter } = parameterSlice.actions;
export default parameterSlice.reducer;
