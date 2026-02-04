import React, { useState } from 'react'

const InterestingCounter = () =>{
  const [count ,setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const hue = count * 15;
  const backgroundColor = {
    backgroundColor: `hsl(${hue}, 100%, 50%)`,
    minHeight: "200px",
    width: "100vpx",
    margin: "20px auto",
    transition: `background-color 0.5s ease`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  }
  const CounterStyle = {
    backgroundColor: "#fff",
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
    height: "60px",
    width: "60px",
    border:"2px solid black",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

  }


  return (
    <div className='CounterContainer' style={backgroundColor}>
        <div className='count' style={CounterStyle}>{count}</div>
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    </div>
  )
}

export default InterestingCounter