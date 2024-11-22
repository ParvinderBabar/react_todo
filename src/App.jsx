
import './App.css'
 const todoList = [
 { id: 1, title: "Complete assignment APACHE NIFI" },
  { id: 2, title: "Buy groceries" },
  { id: 3, title: "Going Gym" }
];
function App() {
return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}


export default App
