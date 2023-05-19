import { useCallback, useState } from "react";
import ChildComp from "./child";

export const UseCallBackExample = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const incrementCounter1 = useCallback(() => {
    setCounter1((lastState) => lastState + 1);
  }, [counter1]);
  console.log(counter1);

  const incrementCounter2 = useCallback(() => {
    setCounter2((lastState) => lastState + 1);
  }, []);

  console.log("parent");
  return (
    <>
      <p>Counter1: {counter1} </p>
      <p>Counter2: {counter2}</p>

      <button onClick={incrementCounter1}> Counter 1 </button>
      <ChildComp counter={counter2} onClick={incrementCounter2} />
    </>
  );
};
