function TodoList({ todos, handleTodo }) {
  return (
    <>
      <ul className="taskList">
        {todos.map((item, index) => {
          return (
            <div className="taskItem" key={index}>
              <li>{item}</li>
              <button className="btn__itemTask" onClick={() => handleTodo(item)}>Concluir tarefa</button>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
