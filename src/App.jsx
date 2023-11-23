import { useState, useEffect } from 'react';
import styles from './App.module.css';
import CardsContainer from './components/CardsContainer/CardsContainer';
import TodoInput from './components/TodoInput/TodoInput';
import ClearButton from './components/ClearButton/ClearButton';

function App() {
  const url = 'http://localhost:3001/todo';
  const [todos, setTodos] = useState(null);
  const [reload, setReload] = useState(false);

  const getTodos = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.status);
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.log(error)
    }
  };

  const createTodo = async (value) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: value, fecha: new Date(), done: false})
      });
      if (response.ok) {
        const json = await response.json();
        setTodos(json);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const updateTodo = async (id, done) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(done)
      });
      if (response.ok) {
        const json = await response.json();
        setTodos(json);
      }      
    } catch (error) {
      console.log(error);
    }
  }

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        forceReload();
        const json = await response.json();
        setTodos(json);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTodos();
  }, [reload]);

  function forceReload() {
    setReload(!reload);
  }

  const numTasksDone = todos ? todos.filter(todo => todo.done).length : 0;
  
  return todos && (
    <>
      <h1>My ToDo App 📝</h1>
      <TodoInput createTodo={createTodo}/>
      <div>
        <p className={styles.counter}>{`${numTasksDone} of ${todos.length} tasks done`}</p>
        <CardsContainer
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
        <div className={styles.ClearButtonContainer}>
          <ClearButton />
        </div>
      </div>
    </>
  )
}

export default App