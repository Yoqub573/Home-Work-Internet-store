import { createSlice } from '@reduxjs/toolkit'
import s from "../images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1.png"

export let todoSlice = createSlice({
  name: "todolist",
  initialState: {
    data:[
      {
        img: s,
        price: "2 491 ₽/шт.",
        name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        id: "1"
      },

      {
        img: s,
        price: "2 491 ₽/шт.",
        name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        id: "2"
      },

      {
        img: s,
        price: "2 491 ₽/шт.",
        name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        id: "3"
      },
    ]
  },
  reducers: {
    deleteUser:(state, action) => {
      state.data = state.data.filter((e) => e.id != action.payload)
    },
    addUser:(state, action) => {
      state.data = [...state.data, action.payload]
    }
  }
})

export let { deleteUser, addUser } = todoSlice.actions