import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://testapi.jellosite.com/api",
});

export const generalApiSlice = createApi({
  baseQuery,
  endpoints: (build) => ({}),
});
