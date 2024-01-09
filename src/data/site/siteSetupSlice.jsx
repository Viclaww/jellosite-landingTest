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
    setName(state, action) {
      state.name = action.payload;
    },
    setSlugAndType(state, action) {
      state.slug = action.payload.slug;
      state.site_type = action.payload.siteType;
    },
  },
});

export const { setName, setSlugAndType } = siteSetupSlice.actions;
export default siteSetupSlice.reducer;
