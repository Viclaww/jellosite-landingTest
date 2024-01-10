import { generalApiSlice } from "./generalapi";

export const createSiteApiSlice = generalApiSlice.injectEndpoints({
  endpoints: (build) => ({
    createNewSite: build.mutation({
      query: ({ body, access }) => ({
        url: "/sites/create/",
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${access}`,
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useCreateNewSiteMutation } = createSiteApiSlice;
