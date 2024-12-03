import PropTypes from 'prop-types';

const AddTodoForm = (props) => {
  function handleAddTodo(event) {
    event.preventDefault();
    const todoTitle = event.target.title.value;
    props.onAddTodo(todoTitle); // This needs validation in PropTypes
    event.target.reset();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todo-title">Todo Task</label>
      <input type="text" name="title" id="todo-title" />
      <button type="submit">Add</button>
    </form>
  );
};

// Adding PropTypes validation
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired, // Validate onAddTodo as a required function
};

export default AddTodoForm;
