import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';

function App() {
  return (
    <div className="App">
      <TodoCounter></TodoCounter>
      <TodoSearch></TodoSearch>
      <TodoList>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </TodoList>
      <CreateTodoButton></CreateTodoButton>
    </div>
  );
}

export default App;
