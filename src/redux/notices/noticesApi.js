import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noticesApi = createApi({
  reducerPath: 'noticesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://team-backend-pets.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      // const { token = '' } = getState().user;
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2l1czdAZ21haWwuY29tIiwiaWF0IjoxNjY5MTIwNDg0LCJleHAiOjE2NjkxNTY0ODR9.Mc57JFDG1jQFixUsHJeRnPkLKP7YQNy3GKTCe0nDAvI';
    
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
      
        getOwnNotices: builder.query({
          query: () => '/notices/find/owner',
          providesTags: ['Notices'],
        }),
      
        addFavoriteNotices: builder.mutation({
          query({ id }) {
            return {
              url: `/notices/addfavorite/${id}`,
              method: 'PATCH',
            }
          },
          invalidatesTags: ['Notices'],
        }),

        deleteFavoriteNotices: builder.mutation({
          query: ({ id }) => ({
            url: `/notices/deletefavorite/${id}`,
            method: 'PATCH',
          }),
          invalidatesTags: ['Notices'],
        }),
  }),
});

export const { useAddFavoriteNoticesMutation, useDeleteFavoriteNoticesMutation, useGetFavoriteNoticesQuery, useGetOwnNoticesQuery } = noticesApi;