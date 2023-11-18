import styles from './index.module.css'

function Card(props) {
  const {text, fecha} = props;
  return (
    <div className={styles.card}>
        <div>
          <p className={styles.title}>
            {text}
          </p>
          <p>{fecha}</p>
        </div>
        <img src="src/assets/Delete.svg" alt="delete icon"/>
    </div>
  )
}

export default Card