import { configureStore } from "@reduxjs/toolkit";
import { pokemonsApi } from "./pokemonsApi";

export const store = configureStore({
    reducer: {
        [pokemonsApi.reducerPath]: pokemonsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonsApi.middleware)
});
