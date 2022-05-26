import './App.css';
import { useState } from "react";
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(newTodo){
    setTodos([...todos, newTodo])
  }

  function handleTodo(newItem){
    const itensVelhos = todos.filter((item) => item !== newItem)
    setTodos(itensVelhos)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo}/>
        <TodoList todos={todos} handleTodo={handleTodo}/>
      </header>
    </div>
  );
}

export default App;
