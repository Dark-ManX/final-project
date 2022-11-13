import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://team-api-blended2.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    createUser: builder.mutation({
      query: newUser => ({
        url: 'register',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: [{ type: 'User' }],
    }),
    registerUser: builder.mutation({
      query: userId => ({
        url: `/register/${userId}`,
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'User' }],
    }),
  }),
});
export const { useCreateUserMutation, useRegisterUserMutation } = authApi;
