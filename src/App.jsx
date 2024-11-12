// src/App.jsx
import TodoList from "./TodoList";
import AddTodoForm from "./Component/AddTodoForm.jsx";
const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
      {/*  added componet here */}
      <AddTodoForm />
    </div>
  );
};

export default App;
