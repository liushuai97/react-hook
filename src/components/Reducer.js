import React, { useReducer } from 'react';

// Reducer 第一个参数 
// state, action => newState 和 redux 完全相同

// 定义简单的reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {...state, count: state.count + 1};
    case 'reduce':
      return {...state, count: state.count - 1};
    default:
      return state;
  }
}

// 第二个参数 传入初始值 createStore() 指定默认值
const initialState = { count: 10, name: 'reducer' }

// 第三个参数 接收函数
// 把第二个参数当作参数执行，用利于重置initialState
const init = initialState => {
  // 进行初始值的一些逻辑操作
  return { count: initialState.count + 2 }
}

// Store， Recucer， Action 三大核心  Redux
export default function ReducerComp () {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <div>
      <br/>
      <label>{state.count}</label>
      <button onClick={()=> dispatch({type: 'add'})}>useReducer 状态管理 + </button>
      <button onClick={()=> dispatch({type: 'reduce'})}>useReducer 状态管理 - </button>
    </div>
  );
}
