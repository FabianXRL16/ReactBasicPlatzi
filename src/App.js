import './App.css';

import TodoCounter from './components/TodoCounter/TodoCounter'
import TodoSearch from './components/TodoSearch/TodoSearch'
import TodoList from './components/TodoList/TodoList'
import CreateTodoButton from './components/CreateTodoButton/CreateTodoButton'

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      <TodoList />
      <CreateTodoButton />
    </div>
  );
}

export default App;
