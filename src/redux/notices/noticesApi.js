import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noticesApi = createApi({
  reducerPath: 'noticesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://team-api-blended2.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      // const { token = '' } = getState().user;
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzM0OGUyM2RhMjk5YmRlY2I2NTFlNCIsImlhdCI6MTY2ODQ5OTcwNSwiZXhwIjoxNjY4NTM1NzA1fQ.W9gK98YZ9OzenWQpIP_e6irUwwyHiAI90L2xk4_Ebmg';
    
      headers.set('Authorization', `Bearer ${token}`);

        return headers;
    },
  }),
    tagTypes: ['Notices'],
    endpoints: (builder) => ({
        getFavoriteNotices: builder.query({
          query: () => '/notices/find/favorite',
          providesTags: ['Notices'],
        }),
      
        addFavoriteNotices: builder.mutation({
          query({ id, payload }) {
            return {
              url: `/notices/addfavorite/${id}`,
              method: 'PATCH',
              body: payload,
            }
          },
          invalidatesTags: ['Notices'],
        }),

        deleteFavoriteNotices: builder.mutation({
          query: ({ id }) => ({
            url: `/notices/deletefavorite/${id}`,
            method: 'DELETE',
          }),
          invalidatesTags: ['Notices'],
        }),
  }),
});

export const { useAddFavoriteNoticesMutation, useDeleteFavoriteNoticesMutation, useGetFavoriteNoticesQuery } = noticesApi;