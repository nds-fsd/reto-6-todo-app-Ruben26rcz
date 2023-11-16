import styles from './index.module.css'

function Card() {

  const title = 'Go to gym';

  return (
    <div className={styles.card}>
        <div>
          <p className={styles.title}>{title}</p>
          <p>12/09/1996</p>
        </div>
        <img src="src/assets/Delete.svg" alt="delete icon"/>
    </div>
  )
}

export default Card