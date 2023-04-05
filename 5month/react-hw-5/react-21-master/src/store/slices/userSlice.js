import { createSlice } from "@reduxjs/toolkit";

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