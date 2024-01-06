import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchArtworks } from "../api/artworkAPI";
import { paginationActions } from "./pagination-slice";
import { useDispatch } from "react-redux";

const initialState = { artworks: [] };

export const fetchArtworksAction = createAsyncThunk(
    'artworks/main',
    async (page = 1, thunkAPI) => {
        const response = await fetchArtworks(page);
        thunkAPI.dispatch(paginationActions.setNavigation(response.pagination));
        return response.data;
    }
)
const artworksSlice = createSlice({
    name: 'artworks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArtworksAction.fulfilled, (state, action) => {
            const artworkData = action.payload;
            state.artworks = artworkData.map(item => {
                return {
                    id: item.id,
                    img: `https://www.artic.edu/iiif/2/${item.image_id}/full/200,/0/default.jpg`,
                    alt: item.title
                }
            });
        })
    }
});
export default artworksSlice;