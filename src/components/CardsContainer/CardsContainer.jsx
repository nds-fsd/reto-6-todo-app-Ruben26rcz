import Card from '../Card/Card'

function CardsContainer(props) {
    const { todos, deleteTodo } = props;

    return (
        <div>
        {todos.length === 0 ? (
          <p>No todos to display.</p>
        ) : (
          todos.map((todo) => <Card key={todo.id} todo={todo} deleteTodo={deleteTodo} />)
        )}
      </div>
    );
};

export default CardsContainer