// Using Multiple Reduces
// 
import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducer/index'
import todoReducer from '../src/features/todoSlice'

// const store = configureStore({ reducer });
const store = configureStore({ 
    reducer: {
        todo: todoReducer
    }
 });

export default store







// Using One Reduces
// 
// import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducer/index'
// 
// const store = configureStore({ 
//     reducer 
// });
// 
// export default store

