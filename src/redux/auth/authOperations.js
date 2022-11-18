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
    // PATCH register: '/auth/register',
    registerUser: builder.mutation({
      query: formData => ({
        url: `/register`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: [{ type: 'User' }],
    }),

    // POST login: '/login',
    loginUser: builder.mutation({
      query: logUser => ({
        url: '/login',
        method: 'POST',
        body: { ...logUser },
      }),
      invalidatesTags: [{ type: 'User' }],
    }),

    // get logout: '/logout',
    logOutUser: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'GET',
      }),
      invalidatesTags: [{ type: 'User' }],
    }),

    // GET current: '/current',
    currentUser: builder.query({
      query: () => '/current',
      providesTags: ['User'],
    }),

    //   GET getUserInfo: '/user',
    getUserInfo: builder.query({
      query: () => '/user',
      providesTags: ['User'],
    }),

    // PATCH updateInfoUser: '/user'
    updateUserInfo: builder.mutation({
      query: updatedUser => ({
        url: `/user/update`,
        method: 'PATCH',
        body: updatedUser,
      }),
      invalidatesTags: [{ type: 'User' }],
    }),

    //   GET getUserPets: '/pets'
    getUserPets: builder.query({
      query: () => '/pets',
      providesTags: ['User'],
    }),

    // POST  createUserPet: '/pets',
    createUserPets: builder.mutation({
      query: newPet => ({
        url: '/pets',
        method: 'POST',
        body: newPet,
      }),
      invalidatesTags: [{ type: 'User' }],
    }),

    // PATCH  changeUserPet: '/pets/:id',
    cnhangeUserPet: builder.mutation({
      query: (newPet, userPetId) => ({
        url: `/pets/${userPetId}`,
        method: 'PATCH',
        body: newPet,
      }),
      invalidatesTags: [{ type: 'User' }],
    }),

    // DELETE deleteUserPet: '/pets/:id',
    deleteUserPet: builder.mutation({
      query: userPetId => ({
        url: `/pets/${userPetId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'User' }],
    }),

    //   GET getNotices: '/notices/one/owner'
    getNotices: builder.query({
      query: () => '/notices/one/owner',
      providesTags: ['User'],
    }),

    //   GET getFavoriteNotices: '/notices/one/favorite'
    getFavoriteNotices: builder.query({
      query: () => '/notices/one/favorite',
      providesTags: ['User'],
    }),

    // PATCH  addNotice: '/notices/addfavorite/${noticeId}',
    addFavoriteNotice: builder.mutation({
      query: (newNotice, noticeId) => ({
        url: `/notices/addfavorite/${noticeId}`,
        method: 'PATCH',
        body: newNotice,
      }),
      invalidatesTags: [{ type: 'User' }],
    }),

    // DELETE  deleteFavoriteNotice: '/notices/addfavorite/${noticeId}',
    deleteFavoriteNotice: builder.mutation({
      query: noticeId => ({
        url: `/notices/deletefavorite/${noticeId}`,
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'User' }],
    }),

    // POST  notices: '/notices',
    createNotice: builder.mutation({
      query: newNotice => ({
        url: '/notices',
        method: 'POST',
        body: newNotice,
      }),
      invalidatesTags: [{ type: 'User' }],
    }),

    // DELETE deleteNotice: `/notices/delete/${noticeId}`,
    deleteNotice: builder.mutation({
      query: noticeId => ({
        url: `/notices/delete/${noticeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'User' }],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogOutUserMutation,
  useCurrentUserQuery,
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
  useGetUserPetsQuery,
  useCreateUserPetsMutation,
  useChangeUserPetMutation,
  useDeleteUserPetMutation,
  useGetNoticesQuery,
  useAddFavoriteNoticeMutation,
  useCreateNoticeMutation,
  useDeleteFavoriteNoticeMutation,
  useDeleteNoticeMutation,
} = authApi;
