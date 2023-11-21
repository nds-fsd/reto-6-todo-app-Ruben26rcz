import styles from './index.module.css'
import SubmitButton from '../SubmitButton/SubmitButton'

function TodoInput(props) {
  const {createAuthor} = props

  return (
    <div className={styles.TodoInputContainer}>
      <input placeholder="Enter your task"></input>
      <SubmitButton />
    </div>
  )
}

export default TodoInput