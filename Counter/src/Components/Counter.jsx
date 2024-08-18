import { useState } from "react";

const Counter=()=>{

          let [counter,setCounter]=useState(0);

const increment=()=>{
  setCounter(counter+1);
}

const decrement=()=>{
  if(counter>0){
  setCounter(counter-1);
  }
}

  return (
    <>
     <h1>Counter</h1>
     <h2>Counter value:{counter}</h2>
     <br />

     <button onClick={increment}>Increment</button>
     <button onClick={decrement}> Decrement</button>

       </>
  )
        
}
export default Counter;