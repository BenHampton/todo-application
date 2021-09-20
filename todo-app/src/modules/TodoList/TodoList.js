import React from 'react'
import TodoItem from './components/TodoItem'
import Input from './components/Input'
import { useSelector } from 'react-redux'
import './TodoList.css'

const TodoList = () => {

    const selectTodoList = useSelector(state => state.todo)

    return (
        <div className="container">   
            <h2>To Do List</h2>
            <div className="todo-container">
                { selectTodoList.todoList.map( ( todo, index ) => ( 
                        <TodoItem
                            key={index}
                            index={index}
                            name={todo.item}
                            isDone={todo.done}
                            date={todo.date}
                        />
                    )
                )}
            </div>
            <Input />
        </div>
    )
}

export default TodoList