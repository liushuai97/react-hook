import React, { createContext, useState } from 'react';
export  const context = createContext({})
// 顶层的组件

export function ContextProvider ({children}) {
  const [count, setCount] = useState(1);
  const countVal = {
    count,
    setCount,
    add: () => setCount(count + 1),
    reduce: () => setCount(count - 1)
  }
  // context对象中，提供了一个自带的Provider组件  其他组件可以使用useContext接受
  return (
    <context.Provider value={countVal}>
      {children}
    </context.Provider>
  )
}