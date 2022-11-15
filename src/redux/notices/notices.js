import { createSlice } from '@reduxjs/toolkit';
import { noticesApi } from './noticesApi'; 

const initialState = {
    items: [],
};

export const noticesSlice = createSlice({
    name: 'notices',
    initialState,
    extraReducers: builder => {
        builder
            .addMatcher(
                noticesApi.endpoints.getFavoriteNotices.matchFulfilled,
                (state, { payload }) => {
                    state.items = payload
                },
            )
    },
});

export default noticesSlice.reducer;