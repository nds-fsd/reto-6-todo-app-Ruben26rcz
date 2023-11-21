import Card from '../Card/Card'

function CardsContainer(props) {
    const { todos, deleteTodo, updateTodo } = props;

    return (
        <div>
        {todos.length === 0 ? (
          <p>No todos to display.</p>
        ) : (
          todos.map((todo) => <Card key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} done={todo.done}/>)
        )}
      </div>
    );
};

export default CardsContainer