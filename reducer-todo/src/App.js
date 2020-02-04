import React, { useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import TodoForm from "./components/todoForm";

import './App.css';


function App() {

  return (
    <div className="App">
      <TodoForm />
    </div>
  );
}
export default App;