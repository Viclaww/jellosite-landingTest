import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import siteSetupReducer from "./site/siteSetupSlice";
import { generalApiSlice } from "./api/generalapi";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    siteSetup: siteSetupReducer,
    [generalApiSlice.reducerPath]: generalApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(generalApiSlice.middleware),
});
