import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authAction";

// Retrieve data from local storage if available
const storedAccessToken = localStorage.getItem("accessToken");
const storedUserInfoString = localStorage.getItem("userInfo");
const storedUserInfo = storedUserInfoString
  ? JSON.parse(storedUserInfoString)
  : null;

// Define the initial state
const initialState = {
  loading: false,
  userInfo: storedUserInfo,
  accessToken: storedAccessToken || null,
  error: null,
  success: false,
};

// Create the authSlice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;

        // Assuming payload is already a JSON object
        const responseData = payload;

        // Update state with the relevant data
        state.accessToken = responseData.access || null; // Ensure a value or null
        state.userInfo = responseData.user || null; // Ensure a value or null

        // Save user information to local storage
        localStorage.setItem("accessToken", state.accessToken); // Ensure a value or empty string
        localStorage.setItem(
          "userInfo",
          JSON.stringify(state.userInfo || null)
        );

        // You may want to reset success to false if needed
        // state.success = false;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
