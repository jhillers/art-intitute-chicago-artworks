import { configureStore } from '@reduxjs/toolkit';
import artworksSlice from './artworks-slice';
import detailSlice from './artwork-detail-slice';
import paginationSlice from './pagination-slice';

const store = configureStore({
    reducer: {
        artworks: artworksSlice.reducer,
        detail: detailSlice.reducer,
        pagination: paginationSlice.reducer
    }
});

export default store;