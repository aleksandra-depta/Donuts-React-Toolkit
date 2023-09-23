import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const donutsApi = createApi({
  reducerPath: 'donutsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:5000/api/v1' }),
  tagTypes: ['Post'],
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
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
})

export const { 
  useGetProductsQuery, 
  useGetCategoryQuery, 
  useGetLocationsQuery, 
  useGetLocationQuery,
  useAddOrderMutation
} = donutsApi
