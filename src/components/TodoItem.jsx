import PropTypes from 'prop-types';

const TodoItem = ({ itemProp }) => (
  <li>
    <input type="checkbox" />
    {itemProp.title}
  </li>
);
TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TodoItem;
