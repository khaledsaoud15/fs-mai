import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginuser = createAsyncThunk(
  "login/loginuser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5050/api/login", {
        email,
        password,
      });
      const token = response.headers["x-auth-token"];
      localStorage.setItem("x-auth-token", token);
      return { token, user: response.data };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("x-auth-token"),
    user: null,
    isLoading: null,
    isError: null,
    errorMessage: "",
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("x-auth-token");
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginuser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(loginuser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(loginuser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Login Faild";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
