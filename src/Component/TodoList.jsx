import TodoListItem from "./TodoListItem.jsx";

const todoList = [
  { id: 1, title: "Complete assignment APACHE NIFI" },
  { id: 2, title: "Buy groceries" },
  { id: 3, title: "Going Gym" },
];

const TodoList = () => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
