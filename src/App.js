import React from 'react';
import Todos from './components/Todos';
import SubCount from './components/SubCount';
import Reducer from './components/Reducer';
import './assets/App.css';

function App() {
  return (
    <div className="App">
      <Todos />
      <h1>React 函数组件  无状态组件</h1>
      <SubCount />
      <Reducer />
    </div>
  );
}

export default App;
