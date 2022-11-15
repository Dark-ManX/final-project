import { createSlice } from '@reduxjs/toolkit';
import { noticesApi } from './noticesApi'; 

const initialState = {
    items: [],
    filter: '',
};

export const noticesSlice = createSlice({
    name: 'notices',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
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

export const { setFilter } = noticesSlice.actions;

export default noticesSlice.reducer;