React Hook入门

什么是React hook？

16.8新特性
- 使用State 在函数组件中

hook
钩子函数，回调

把类组件的一些特性加入到函数组件中
可以使非Class的情况下，可以使用更多React特性
完全可选是否使用
100%向后兼容
现在可用
没有计划从React中移除Class
不影响对React概念理解
props state context

为什么要用hook？

代码更加简洁
上手更加简单

降低了学习成本
1、生命周期
2、高阶组件
3、Redux - 》 mbox
4、开发体验也非常好，可以在函数组件维护内部的State状态

React上手不容易，主要是？

1、生命周期难以理解，很难熟练应用
2、Redux 状态管理，概念非常多，难以理解，尽量看英文文档
3、高阶组件理解难度较大
4、很多优秀的解决方案，都在React英文社区

React 是单向数据流，自上而下的单项数据流方式（React）
State/Props改变会引起组件重新渲染，父组件变化影响所有子组件重新渲染

class render
function 整个函数组件重新执行

函数组件 首字母大写
返回JSX结构

hook 函数组件 有状态的函数组件 State状态管理

Hook核心概念与应用

useState
每次渲染，函数都会重新执行，函数执行完毕，所有的内存都会释放掉
useState 在函数内部创建当前函数组件状态，提供修改状态的方法
useState(0) 设置默认值为0
更新状态的函数 [count, setCount]

useEffect 类似 class组件中的一些生命周期  合并成API
组件中总会执行一些副作用操作，函数组件中，纯函数，固定的输入props，得到固定的输出

什么是副作用？
只想渲染DOM -》 渲染完毕后还想继续执行一段逻辑（副作用）
没有发生在数据向视图转换过程中的逻辑：
ajax、访问原生dom对象，定时器

需要清除的，不需要清除的
hook之前，副作用操作都是不能在函数组件中使用

useEffect(fn) 组件渲染到屏幕之后才会执行 返回值：fn 一个清除副作用的函数 / 不返回 

一般不需要同步执行，需要同步执行 useLayoutEffect

如何清除副作用
componentWillUnmount - 》 useEffect 返回一个清除副作用的函数

useContext

16版本更新了 context api
定义了发布者模式，主要作用于 爷孙组件之间的传值
useContext 使用context能力
提供一个顶层组件
context 和 userContext 结合使用更容易解决组件之间状态共享问题  - redux

userReducer
redux
userState内部就是通过userReducer实现的
userState的替代方案  (state, action) => newState
useReducer接收3个参数：
1、接收一个函数，reducer对数据的具体操作。
2、state初始值。
3、接收一个函数，用于state初始化。

useRef

16版本中 Object.createRef 创建ref的方法
{current: ''}
访问DOM节点、与React元素
放在useEffect去操作DOM

useMemo & useCallback

useMemo 把创建函数和依赖项数组作为参数传入useMemo
useCallback 接收内联回调函数和一个依赖项数组

计算的缓存，记忆函数，利用了闭包的特性

自定义Hook
逻辑功能相同的片段 -》封装成单独的函数来使用
自定义 hook 函数 -》 自定义函数
自定义 hook 中也可以调用官方提供的hook
use开头，表示只能在函数组件中进行使用
render props 高阶组件  redux
复用状态逻辑的方式，而不是复用state本身

事实上hook每次调用的时候，都有一个独立的state
抽离公共代码

Hook使用规则
1、只能在最顶层使用hook，不要在循环，条件，嵌套函数中调用hook
2、只在react函数组件中调用hook，自定义hook中调用hook
