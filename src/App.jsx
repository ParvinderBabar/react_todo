
import './App.css'


// import React from 'react';

const todoList = [
  { id: 1, title: "Complete assignment APACHE NIFI" },
  { id: 2, title: "Buy groceries" },
  { id: 3, title: "Going Gym" }
];

function App() {
  


  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {
          todoList.map((todo) => (
            <li key={todo.id}>
              {todo.title}
            </li>
          ))
        }
      </ul>git 
    </>
  )
}

export default App
