import { configureStore } from '@reduxjs/toolkit'
import { todoSlice } from '../reducers/todoListSlice.jsx'
export const store = configureStore({
	reducer: {
		todolist: todoSlice.reducer,
	},
})
