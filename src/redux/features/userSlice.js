import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserDataService from "../../services/user";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    clear: (state, action) => {
      state.error = null;
      state.message = null;
      state.status = null;
      state.success = null;
      state.registerSuccess = null;
      state.isUser = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.message = action.payload;
        if(action.payload === "login success") {
          state.isUser = true 
        } else if(action.payload === "Login failed") {
          state.isUser = false
        }
      })
    //   .addCase(loginRequest.rejected, (state, action) => {
    //     state.loading = false;
    //     state.isAuthenticated = false;
    //     state.error = action.payload.message;
    //   })
      .addCase(registerRequest.fulfilled, (state, action) => {
        state.user = action.payload
        state.message = action.payload;
        if(action.payload === "sign up success") {
          state.isUser = true 
        } else if(action.payload === "email already exis") {
          state.isUser = false
        }
      })

  },
});

export const loginRequest = createAsyncThunk(
  "user/loginRequest",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await UserDataService.login(email, password);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const registerRequest = createAsyncThunk(
  "user/registerUserRequest",
  async ({ email, password }, { rejectWithValue }) => {
    try {
        console.log('email password', email, password)
      const response = await UserDataService.registration(
        email,
        password
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

// export const logoutRequest = createAsyncThunk(
//   "user/logoutRequest",
//   async () => {
//     const data = await UserDataService.logout()
//       .then((res) => res.data)
//       .catch((err) => err);

//     return data;
//   }
// );


export const { clear } = userSlice.actions;
export default userSlice.reducer;