import { useState, useEffect } from 'react';
import Card from '../Card/Card'

function CardsContainer() {
    const url = 'http://localhost:3001/todo';
    const [todos, setTodos] = useState(null);
  
    useEffect(() => {
      const getTodos = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error(response.status);
          const data = await response.json();
        //console.log(data);
          setTodos(data);
        } catch (error) {
          console.log(error)
        }
      };
      getTodos();
    }, []);
    return todos && todos.map((todo) =>{
        return <Card key={todo.id} text={todo.text} fecha={todo.fecha} />
    })
}

export default CardsContainer