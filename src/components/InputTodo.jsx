import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  // ...
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          className="input-text"
          value={title}
          onChange={handleChange}
        />
        <button
          type="button"
          className="input-submit"
        >
          <FaPlusCircle
            style={{
              color: 'green',
              fontSize: '20px',
              marginTop: '2px',
            }}
          />
        </button>
      </form>
      <span className="submit-wraning">{message}</span>
    </>
  );
};
InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default InputTodo;
