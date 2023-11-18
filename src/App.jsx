// eslint-disable-next-line no-unused-vars
import styles from './App.module.css'
import CardsContainer from './components/CardsContainer/CardsContainer';
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
          <CardsContainer />
        </div>
      </div>
    </div>
  )
}

export default App