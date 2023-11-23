import styles from './index.module.css'

const ClearButton = ({clearCompleted}) => {
  return (
    <button className={styles.textButton} onClick={clearCompleted}>Delete completed todos</button>
  )
}

export default ClearButton