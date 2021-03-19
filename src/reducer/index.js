import { combineReducers } from 'redux'
import toDoReducer from '../features/todoSlice'

const reducer = combineReducers({ 
    toDoReducer
  })
  
export default reducer