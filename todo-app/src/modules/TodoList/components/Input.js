import React, { useState } from 'react'
import './css/Input.css'
import {useDispatch} from 'react-redux'
import {saveTodo} from '../../../features/todoSlice'

export const Input = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodo = () => {
        if (input === '') {
            return
        }

        dispatch(saveTodo({
            item: input,
            done: false,
            date: Date.now() 
        }))

        setInput('')
    }

    return (
        <div className='input'>
            <input type='text' value={input} onChange={e => setInput(e.target.value) } />
            <button onClick={addTodo}>Add</button>
        </div> 
    )
}
export default Input