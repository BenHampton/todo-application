import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import './css/TodoItem.css'
import {useDispatch} from 'react-redux'
import {setCheck, removeItem} from '../../../features/todoSlice'

const TodoItem = ({name, isDone, date, index}) => {

    const dispatch = useDispatch()

    const handleCheck = () => {
        dispatch(setCheck(date))
    }
    
    const handleRemove = () => {
        dispatch(removeItem(index))
    }

    return (
        <div className="todo-item-container">
            <div className="todo-item">
                <p>{index}</p>
                <p>{name}</p>
                <Checkbox
                    checked={isDone}
                    color="primary"
                    onChange={handleCheck}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <p>{date}</p>
                <span>
                    <button onClick={handleRemove}>Remove</button>
                </span>
            </div>
        </div>
    )
}
export default TodoItem