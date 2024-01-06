import { createSlice } from "@reduxjs/toolkit";

const initialState = {img:'', description:'',title:''};

const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers:{},
    extraReducers:{}
});

export default detailSlice;