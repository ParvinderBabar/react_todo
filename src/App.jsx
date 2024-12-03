import { useState } from "react";
// import TodoList from "./TodoList.jsx";

import AddTodoForm from "./Component/AddTodoForm.jsx";
import TodoList from "./Component/TodoList.jsx";

const App = () => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p> {/* Display new todo */}
    </div>
  );
};

export default App;
