import styles from './index.module.css'

function Card(props) {
  const {todo, deleteTodo} = props;
  
  return (
    <div className={styles.card}>
        <div>
          <p className={styles.title}>
            {todo.text}
          </p>
          <p>{todo.fecha}</p>
        </div>
        <button className={styles.iconButton} onClick={()=>deleteTodo(todo.id)}>
          <img src="src/assets/delete_icon.svg" alt="delete icon"/>
        </button>
    </div>
  )
}

export default Card