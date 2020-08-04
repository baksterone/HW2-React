import React from 'react';

import Header from './components/Header/Header';
import SearchInput from './components/SearchInput';
import Filter from './components/Filtr';
import TodoList from './components/TodoList';
import TaskInput from './components/TaskInput';
import Counter from './components/Counter';


import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <SearchInput />
      <Filter />
      <TaskInput />
      <TodoList/>
      <Counter />
    </div>
  );
}

export default App;
