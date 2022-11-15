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
    // POST create: '/register',
    createUser: builder.mutation({
      query: newUser => ({
        url: '/register',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: [{ type: 'User' }],
    }),

    // PATCH register: '/register/:id',
    registerUser: builder.mutation({
      query: (registeredUser, userId) => ({
        url: `/register/${userId}`,
        method: 'PATCH',
        body: registeredUser,
      }),
      invalidatesTags: [{ type: 'User' }],
    }),

    // POST login: '/login',
    loginUser: builder.mutation({
      query: logUser => ({
        url: '/login',
        method: 'POST',
        body: logUser,
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

    // PATCH  addUserPet: '/pets/:id',
    changeUserPet: builder.mutation({
      query: userPetId => ({
        url: `/pets/${userPetId}`,
        method: 'PATCH',
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
    getUserNotices: builder.query({
      query: () => '/notices/one/owner',
      providesTags: ['User'],
    }),

    // PATCH  addNotice: '/notices/addfavorite/${noticeId}',
    addNotice: builder.mutation({
      query: noticeId => ({
        url: `/notices/addfavorite/${noticeId}`,
        method: 'PATCH',
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
} = authApi;
