import {createSlice} from '@reduxjs/toolkit'
import krisha1 from '../img/krisha1.png'
import krisha2 from '../img/krisha2.png'
import krisha3 from '../img/krisha3.png'
import krisha4 from '../img/krisha4.png'
export const todoSlice = createSlice({
    name: 'todolist',
    initialState: {
        data: [
            {
                id: '1',
                name: 'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3',
                price: '2 491 ₽/шт.',
                img: krisha1
            },
            {
                id: '2',
                name: 'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3',
                price: '3 200 ₽/шт.',
                img: krisha2
            },
            {
                id: '3',
                name: 'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3',
                price: '1 345 ₽/шт.',
                img: krisha3
            },
            {
                id: '4',
                name: 'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3',
                price: '2 600 ₽/шт.',
                img: krisha4
            },
        ]
    },
    reducers: {
        deleteUser: (state, action) => {
            state.data = state.data.filter((e) => e.id != action.payload)
        },
        addUser: (state, action) => {
            state.data.push(action.payload)
        },
        editUser: (state, action) => {
            state.data = state.data.map((e) => {
                if(e.id == action.payload.id){
                    return (action.payload)
                }
                return e;
            })
        }
    }
}) 

export const {deleteUser, addUser, editUser} = todoSlice.actions