import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchArtworkDetail } from "../api/artworkAPI";
const initialState = { img: '', description: '', title: '', loading: 'idle' };

export const fetchArtworkDetailAction = createAsyncThunk(
    'detail/fetch',
    async (artworkId, thunkAPI) => {
        const response = await fetchArtworkDetail(artworkId)
        return response.data;
    }
)

const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArtworkDetailAction.pending, (state, action) => {
                console.log('pending')
                state.loading = 'pending'
                state.img = '';
                state.title = 'Loading...';
                state.description = ''; 
            })
            .addCase(fetchArtworkDetailAction.fulfilled, (state, action) => {
                const artworkData = action.payload;
                state.img = `https://www.artic.edu/iiif/2/${artworkData.image_id}/full/800,/0/default.jpg`;
                state.title = artworkData.title;
                state.description = artworkData.description;
                state.loading = 'succeeded';
            })
            .addCase(fetchArtworkDetailAction.rejected, (state, action) => {
                console.log('failed')
                state.loading = 'failed';
            })
    }
});


export default detailSlice;