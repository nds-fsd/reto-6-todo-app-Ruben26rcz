import styles from './index.module.css'
import SubmitButton from '../SubmitButton/SubmitButton'

function TodoInput(props) {
const { createTodo } = props;
  return (
    <div className={styles.TodoInputContainer}>
      <input className={styles.input} id="input" placeholder="Enter your task"></input>
      <SubmitButton createTodo={createTodo}/>
    </div>
  )
}

export default TodoInput