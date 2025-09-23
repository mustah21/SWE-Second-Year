import { useCounter } from './useCounter';  
import './single.css';  


const singleCounter = () => {
    const { counter, increment, decrement, reset } = useCounter(0);

    return (
    <div className="single-counter">
            <h2>Counter: </h2>
            <div className="counter-value">{counter}</div>

            <button onClick={increment}></button>
            <button onClick={decrement}></button>
            <button onClick={reset}></button>

        </div>
    )
}

export default singleCounter;