// const TodoListItem = (props) => {
//   return (
//     <li>{props.todo.title}</li>
//   );
// };

// export default TodoListItem;
import PropTypes from 'prop-types';

const TodoListItem = (props) => {
  return <li>{props.todo.title}</li>;
};

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired, // Ensures `title` is a string and required
  }).isRequired, // Ensures `todo` object is required
};

export default TodoListItem;

