import React, { createContext, useState } from 'react';
export  const context2 = createContext({})
// 顶层的组件

export function ContextProvider2 ({children}) {
  const [val, setVal] = useState(100);
  const vals = {
    val,
    setVal,
    add2: () => setVal(val + 2),
    reduce2: () => setVal(val - 2)
  }
  // context对象中，提供了一个自带的Provider组件  其他组件可以使用useContext接受
  return (
    <context2.Provider value={vals}>
      {children}
    </context2.Provider>
  )
}