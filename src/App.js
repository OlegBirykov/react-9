import React from 'react';
import './App.css';
import TaskHeader from './TaskHeader';
import MenuApp from './task1/MenuApp';


function App() {
  return (<React.Fragment>
    <div className="task-1">
      <TaskHeader title="Задача 1" />
      <MenuApp />
    </div>
    <div className="task-2">
      <TaskHeader title="Задача 2" />
    </div>
  </React.Fragment>);
}

export default App;
