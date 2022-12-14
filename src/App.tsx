import { type } from 'os';
import React, {useState} from 'react';
import './App.css';
import InputFiled from './Components/InputFiled';
import TodoList from './Components/TodoList';
import { Todo } from './model';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  // console.log(todo)
 
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  //  console.log(todos)

  return(
    <div className="App">
      <span className="heading">Taskify</span>

      <InputFiled todo={todo} setTodo={setTodo} handleAdd = {handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App;
