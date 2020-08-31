import React, { useContext } from 'react';
import {context, ContextProvider} from './Context';
import {context2, ContextProvider2} from './Context2';

function SubCount () {
  const {count, add, reduce} = useContext(context);
  const {val, add2, reduce2} = useContext(context2);
  return (
    <div>
      <p>{count}</p>
      <button onClick={add}>点击增加</button>
      <button onClick={reduce}>点击减少</button>

      <p>{val}</p>
      <button onClick={add2}>点击增加2</button>
      <button onClick={reduce2}>点击减少2</button>
    </div>
  )
}

export default () => (
  <ContextProvider2>
  <ContextProvider><SubCount /></ContextProvider>
  </ContextProvider2>
)
