import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchArtworks } from "../api/artworkAPI";
import { paginationActions } from "./pagination-slice";
import { useDispatch } from "react-redux";

const initialState = { artworks: [] };

const fetchArtworksAction = createAsyncThunk(
    'artworks/main',
    async (page = 1, thunkAPI) => {
        const response = await fetchArtworks(page);
        thunkAPI.dispatch(paginationActions.setNavigation(response.data.pagination));
        return response.data;
    }
)
const artworksSlice = createSlice({
    name: 'artworks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArtworksAction.fulfilled, (state, action) => {
            const artworkData = action.payload.data;
            state.artworks = artworkData.map(item => {
                return {
                    id: item.id,
                    img: item.thumbnail.lqip,
                    alt: item.title
                }
            });
        })
    }
});

export default artworksSlice;