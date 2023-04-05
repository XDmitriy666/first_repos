import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const name = 'post'
const initialState = {
    post: [],
    status: '',
    error: ''
}
export const postFetch = createAsyncThunk(
    `${name}/postFetch`,
    async (params) => {
        const data = await axios.get('https://jsonplaceholder.typecode.com/todos/1', {params})
        return data
    }
)
export const postCreate = createAsyncThunk(
    `${name}/postFetch`,
    async (body, { extra: api }) => {
        const data = await api.post('/posts', body)
        return data
    }
)
export const postPatch = createAsyncThunk(
    `${name}/postFetch`,
    async ({ body, id }, { extra: api }) => {
        const data = await api.patch(`/posts/${id}`, body)
        return data
    }
)
export const postDelete = createAsyncThunk(
    `${name}/postFetch`,
    async (id, { extra: api }) => {
        const data = await api.delete(`/posts/${id}`)
        return data
    }
)
export const postSlice = createSlice({
    name,
    initialState,
    reducers: {
        increment: (state, action) => {
            state.post = 'HELLO WORLD'
        },
        decrement: (state, action) => {
            state.post = 'NOT HELLO'
        }
    },
    extraReducers: (builder) => {
        builder.addCase(postFetch.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(postFetch.fulfilled, (state, action) => {
            console.log(action.payload)
            state.post = [...state.post, ...action.payload.data]
            state.status = 'success'
        })
        builder.addCase(postFetch.rejected, (state, action) => {
            console.log(action.payload)
            state.error = 'ERROR'
            state.error = 'rejected'
        })
    }
})
export const { reducer: postReducer } = postSlice
export const { actions: postActions } = postSlice