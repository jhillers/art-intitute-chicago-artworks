import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentPage: 1, totalPages: 1 };

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setNavigation(state, action) {
            const pagination = action.payload;
            state.currentPage = pagination.currentPage;
            state.totalPages = pagination.totalPages;
        }
    }
});

export default paginationSlice;