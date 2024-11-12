// src/AddTodoForm.jsx

const AddTodoForm = () => {
  return (
    <form>
      <label htmlFor="Title">Todo Task</label>
       <input type="text" id="todoTitle" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm; 
