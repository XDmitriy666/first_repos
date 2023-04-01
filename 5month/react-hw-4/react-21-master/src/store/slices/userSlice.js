import { createSlice } from "@reduxjs/toolkit";
import {deletePost,updatePost} from "./postSlice";

const postSlice = createSlice({
    name: 'posts',
    initialState:[],
    reducers:{

    },
    extraReducers: (builder) => {
        builder
            .addCase(deletePost.fulfilled, (state, action) => {
                return state.filter((post) => post.id !== action.payload.id);
            })
            .addCase(updatePost.fulfilled, (state,action) => {
                const updatePost = action.payload;
                const index = state.findIndex ((post) => post.id === updatePost.id);
                state.splice(index, 1, updatePost);
            });
    },
});

export default postSlice.reducer;

const name = 'users'
const initialState = {
    user: {}
}

export const userSlice = createSlice({
    name,
    initialState,
    reducers: {
        increment: (state, action) => {
            state.user = 'HELLO WORLD'
        },
        decrement: (state, action) => {
            state.user = 'NOT HELLO'
        }
    },
    extraReducers: {}
})

export const { reducer: userReducer } = userSlice
export const { actions: userActions } = userSlice