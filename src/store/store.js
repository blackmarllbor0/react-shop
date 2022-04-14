import { configureStore } from "@reduxjs/toolkit";
import index from '../reducer/index'

export const store = configureStore({
    reducer: { index },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});