import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useNumber } from './useNumber';

function Todos () {
  // 2、首次渲染的时候才会执行
  // 首次执行 Count初始值 {a: 1}
  // 再次执行 Count获取到闭包中的缓存值
  // let [count, setCount] = useState({
  //   a: 1
  // });
  // function handleClick () {
    // count++;
    // 1、可以任意类型，传入什么都会直接覆盖之前的count值
    // state改变都是异步的
    // setCount({...count, b: 2});
  // }

  const refInput = useRef(null);

  // 复用的是状态的逻辑  不是状态，每个组件单独调用
  const [number, setNumber] = useNumber();
  console.log('useNumber', number);
  console.log('useNumber - setNumber', setNumber);

  function handleClick () {
    // count++;
    setCount(count => {
      return ++count;
    });
  }

  // useState允许在一个组件中使用多次
  let [nzm, setNzm] = useState(10);

  const num = 2;
  let [count, setCount] = useState(()=>{
    return 10 * num;
  })

  // 1、dom渲染完成，副作用执行
  // 2、副作用执行的过程中，修改State状态，引发重新渲染，会导致副作用无限循环
  useEffect(()=>{
    // ajax
    setTimeout(() => {
      setNzm(nzm => {
        return ++nzm
      })
    }, 1500);
    console.log('副作用函数');

    // 1、执行时间，组件卸载前
    // 2、下一个useEffect执行前
    function clean() {
      // 清理工作
      console.log('清除副作用')
    }

    return clean;
  },
  // 监听的依赖 浅比较，定义了第二个参数，相当于告诉React不依赖于props，state
  [count])


  useEffect(()=> {
    console.log('执行');
    refInput.current.focus();
  }, [])

  // 闭包实现缓存， 占用内存，不能盲目使用
  const memorized = useCallback(() => {
    return count
  }, [nzm]);

  const memorized2 = useMemo(() => {
    return count
  }, [nzm]);

  console.log('callback', memorized());
  console.log('memo', memorized2);
  console.log('原始值', count);

  return (
    <div>
      {/* <p>{count.a} {count.b}</p> */}
      <p>{count}</p>
      <p>{nzm}</p>
      <label htmlFor='userid'></label>
      <input type="text" id="userid" ref={refInput}/>
      <button onClick={handleClick}>点击+1</button>
    </div>
  )
}

export default Todos;