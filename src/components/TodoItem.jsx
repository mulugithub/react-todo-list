import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, delTodo }) => (
  <li>
    <input
      type="checkbox"
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}
    />
    {itemProp.title}
    <button type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
    {itemProp.title}
  </li>
);

TodoItem.propTypes = {
  itemProp: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
