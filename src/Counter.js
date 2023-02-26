import React from 'react'
import { useState } from 'react'
function Counter() {
  const [count, setCount] = useState(0)

  // if we want to increase count by 4

  const clickHandler = () => {
    // method 1 -> wrong -> so react don't rerendered fn just after setCount fn but it will rerendered after complete this event handler fn

    // setCount(count + 1) //0+1=>1
    // setCount(count + 1) //0+1=>1
    // setCount(count + 1) //0+1=>1
    // setCount(count + 1) //0+1=>1

    // method 2 -> right ->
    setCount((prevCount) => prevCount + 1) //0+1=>1
    setCount((prevCount) => prevCount + 1) //1+1=>2
    setCount((prevCount) => prevCount + 1) //2+1=>3
    setCount((prevCount) => prevCount + 1) //3+1=>4
  }
  return (
    <div>
      <button onClick={clickHandler}>Count : {count}</button>
    </div>
  )
}

export default Counter
