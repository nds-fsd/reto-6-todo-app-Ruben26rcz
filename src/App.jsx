// eslint-disable-next-line no-unused-vars
import styles from './App.module.css'
import Card from './components/Card/Card'
import TodoInput from './components/TodoInput/TodoInput'

function App() {

  const numTasksDone = 3;
  const totalTasks = 5;
  
  return (
    <div>
      <h1>My ToDo App 📝</h1>
      <TodoInput />
      <div>
        <p className={styles.counter}>{`${numTasksDone} of ${totalTasks} tasks done`}</p>
        <div className={styles.cardsContainer}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App