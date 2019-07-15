import React from 'react';
import TaskContainer from './containers/Task/TaskContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ width: "25vw" }}></div>
      <div className="vertical_division"></div>
      <TaskContainer></TaskContainer>
    </div>
  );
}

export default App;
