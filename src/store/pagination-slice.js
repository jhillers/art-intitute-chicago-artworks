import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentPage: 1, totalPages: 1 };

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setNavigation(state, action) {
            const pagination = action.payload;
            state.currentPage = pagination.current_page;
            state.totalPages = pagination.total_pages;
        }
    }
});

export const paginationActions = paginationSlice.actions;
export default paginationSlice;