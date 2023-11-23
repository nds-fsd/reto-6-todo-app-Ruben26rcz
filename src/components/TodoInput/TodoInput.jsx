import {useState} from 'react';
import styles from './index.module.css';
import SubmitButton from '../SubmitButton/SubmitButton';

function TodoInput({ createTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue.length > 0) {
      createTodo(inputValue);
      setInputValue('');
    }
  }

  return (
    <div className={styles.TodoInputContainer}>
      <input
        className={styles.input}
        id="todoTitle"
        placeholder="Enter your task"
        maxLength="100"
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <SubmitButton handleSubmit={handleSubmit} disabled={inputValue.length === 0}/>
    </div>
  )
}

export default TodoInput