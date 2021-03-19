import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },

        setCheck: (state, action) => {
            state.todoList.map( todo  =>  {
                if (action.payload === todo.date) {
                    todo.done = !todo.done
                }
            })
        },

        removeItem: (state, action) => {
            state.todoList.splice(action.payload, 1)
        }
    }
})

export const { saveTodo, setCheck, removeItem } = todoSlice.actions
export default todoSlice.reducer