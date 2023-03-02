import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dog.ceo/api/" }),
  tagTypes: ["Dogs"],
  endpoints: (builder) => ({
    getAllDogs: builder.query({
      query: () => `breeds/list/all`,
      //   providesTags: (result) =>
      //     result ? result.map(({ id }) => ({ type: "Dogs", id })) : [],
    }),
    getRandomImage: builder.query({
      query: () => "breeds/image/random",
    }),
  }),
});

export const { useGetAllDogsQuery, useGetRandomImageQuery } = apiSlice;
