import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const donutsApi = createApi({
  reducerPath: "donutsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://donuts-api.onrender.com/api/v1",
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    // getProducts: build.query({
    //   query: () => `/products`,
    // }),
    // getCategory: build.query({
    //   query: (category) => `/products?type=${category}`,
    // }),
    getLocations: build.query({
      query: () => `/locations`,
    }),
    getLocation: build.query({
      query: (id) => `/locations/${id}`,
    }),
    addOrder: build.mutation({
      query: (body) => ({
        url: `orders`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoryQuery,
  useGetLocationsQuery,
  useGetLocationQuery,
  useAddOrderMutation,
} = donutsApi;
