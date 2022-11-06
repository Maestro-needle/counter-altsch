
import useCounter from "../Hooks/useCounter";

function Counter() {
    const [count, increment, decrement, reset] = useCounter(0, 1)
  
  return(
     <div className="buttons">
        <h2 className="counter">Count = {count}</h2>
        <button className="btn1" onClick={increment}>Increment</button>
        <button className="btn2" onClick={decrement}>Decrement</button>
        <button className="btn3" onClick={reset}>Reset</button>
       
     </div>
  );
} 



export default Counter;
