
// src/TodoList.jsx

const todoList = [
 { id: 1, title: "Complete assignment APACHE NIFI" },
  { id: 2, title: "Buy groceries" },
  { id: 3, title: "Going Gym" }
];

const TodoList = () => {
  return (
    <ul>
      {todoList.map(item => (
          <li key={item.id}>
              {item.title}
          </li>
      ))}
    </ul>
  );
};
export default TodoList;
