import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API_METHOD } from "../../../Constant";

export const ApiAuth = createApi({
  reducerPath: "api/auth",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: (body) => ({
        url: "/login",
        method: API_METHOD.POST,
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = ApiAuth;
