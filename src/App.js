import logo from './platzi.webp';
import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar curso de introducción a React", completed: true },
  { text: "Llorar con la llorona", completed: false },
  { text: "Decir hola desde React", completed: true },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={20}></TodoCounter>
      <TodoSearch></TodoSearch>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton></CreateTodoButton>
    </React.Fragment>
  );
}

export default App;
