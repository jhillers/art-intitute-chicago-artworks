import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchArtworkDetail } from "../api/artworkAPI";
const initialState = {img:'', description:'',title:''};

const fetchArtwork = createAsyncThunk(
    'artworks/detail',
    async (artworkId, thunkAPI) => {
      const response = await fetchArtworkDetail(artworkId)
      return response.data;
    }
  )
  
const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchArtwork.fulfilled, (state, action) => {
          const artworkData = action.payload.data;
          state.img = artworkData.thumbnail.lqip;
          state.title = artworkData.title;
          state.description = artworkData.description;
        })
      }
});

export default detailSlice;