import { createSlice } from "@reduxjs/toolkit";

const initialState = {artworks:[]};

const artworksSlice = createSlice({
    name: 'artworks',
    initialState,
    reducers:{},
    extraReducers:{}
});

export default artworksSlice;