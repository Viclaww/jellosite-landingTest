import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const endpointURL = "http://testapi.jellosite.com";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ username, email, password, phone, gender }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        `${endpointURL}/api/auth/register`,
        { username, email, password, phone, gender },
        config
      );
      return response.data;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        `${endpointURL}/api/auth/login/`,
        { username, password },
        config
      );
      // store user's token in local storage
      return response;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
