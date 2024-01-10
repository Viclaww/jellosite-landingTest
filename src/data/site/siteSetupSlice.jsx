import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  slug: "",
  site_type: "",
};

const siteSetupSlice = createSlice({
  name: "storesetup",
  initialState,
  reducers: {
    setType(state, action) {
      state.site_type = action.payload;
    },
    setSlugAndName(state, action) {
      state.slug = action.payload.slug;
      state.name = action.payload.name;
    },
  },
});

export const { setType, setSlugAndName } = siteSetupSlice.actions;
export default siteSetupSlice.reducer;
