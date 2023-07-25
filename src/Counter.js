import { useState, useEffect } from "react";
import ButtonRow from "./ButtonRow";
import Count from "./Count";

function Counter() {
  const [count, setCount] = useState(0);
  const [isRuning, setIsRuning] = useState(false);
  const incrementHandler = () => {
    setCount(count + 1);
  };

  const decrementHandler = () => {
    setCount(count - 1);
  };

  const oddIncrementHandler = () => {
    return Math.abs(count) % 2 === 1 ? setCount(count + 1) : null;
  };

  const asyncIncrementHandler = () => {
    return setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  };

  useEffect(() => {
    let intervalId;
    if (isRuning) {
      intervalId = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRuning]);

  const toggleHandler = () => {
    setIsRuning((prev) => (prev = !prev));
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div>
      <Count count={count} />
      <ButtonRow
        increment={incrementHandler}
        decrement={decrementHandler}
        oddincrement={oddIncrementHandler}
        asyncincrement={asyncIncrementHandler}
        toggle={isRuning ? "stop" : "start"}
        startincrement={toggleHandler}
        reset={resetHandler}
      />
    </div>
  );
}

export default Counter;
