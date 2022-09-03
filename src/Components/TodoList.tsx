import React from 'react'
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './styles.css'


interface props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  }
  

const TodoList: React.FC<props> = ({ todos, setTodos }: props) => {
  return (
    <div className='todos'>
        {todos.map(todo => (
            <SingleTodo 
             todo={todo}
             key={todo.id}
             todos={todos}
             setTodos={setTodos}
             />
        ))}
    </div>
  )
}

export default TodoList