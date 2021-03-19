import React from 'react';
import './App.css';
import ToDoList from './modules/TodoList/TodoList'

function App() {


  return (
    <div className="app">
      <h1>React Redux</h1>
      <div>
          <ToDoList />
      </div>
    </div>
  );
}

export default App;
