import styles from './index.module.css'
import { useState } from 'react';

function Card(props) {
  const {todo, deleteTodo, updateTodo, done} = props;
  const [isDone, setIsDone] = useState(done);
  let cardStyleHandler = styles.card;
  let titleStyleHandler = styles.title;

  const handleUpdateTask = () => {
    setIsDone(!isDone);
    updateTodo(todo.id, {done: !isDone});
  }

  if (isDone) {
    cardStyleHandler += ` ${styles.cardDone}`;
    titleStyleHandler += ` ${styles.titleDone}`;
  }
  
  return (
    <div className={cardStyleHandler}>
      <div className={styles.contentCheck}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id={todo.id}
          name="done"
          checked={isDone}
          onChange={handleUpdateTask}
        />
          <div>
            <p className={titleStyleHandler}> {todo.text} </p>
            <p>{todo.fecha}</p>
          </div>
        </div>
        <button className={styles.deleteButton} onClick={()=>deleteTodo(todo.id)}>
          <img src="src/assets/delete_icon.svg" alt="delete icon"/>
        </button>
    </div>
  )
}

export default Card