import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../reducers/todolistSlice";

export const store = configureStore({
    reducer: {
        todoSlice: todoSlice.reducer
    }
})