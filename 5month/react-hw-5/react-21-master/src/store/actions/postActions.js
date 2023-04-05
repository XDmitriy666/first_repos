import {createAsyncThunk, createAction} from "@reduxjs/toolkit";
import axios from "axios";
export const createPost = createAsyncThunk("createPost", async (newPost) => {
    const {data} = await axios.post('http://localhost:2000', newPost)
    return data
})
export const deletePost = createAsyncThunk('deletePost', async (id) => {
    await axios.delete('http://localhost:2000', id)
    return id
})