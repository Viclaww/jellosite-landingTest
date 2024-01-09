import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import siteSetupReducer from "./site/siteSetupSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    siteSetup: siteSetupReducer,
  },
});
