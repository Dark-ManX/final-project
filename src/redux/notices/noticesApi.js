import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noticesApi = createApi({
  reducerPath: 'noticesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://team-api-blended2.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      // const { token = '' } = getState().user;
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzRhYzRhODRjNDNiMTg1MWI1MWRkYSIsImlhdCI6MTY2ODU5MDY3NywiZXhwIjoxNjY4NjI2Njc3fQ.l9nv-VhZ582KYX7GKbo2X22zFh30STKiqxdMcJrD49M';
    
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

export const { useAddFavoriteNoticesMutation, useDeleteFavoriteNoticesMutation, useGetFavoriteNoticesQuery } = noticesApi;