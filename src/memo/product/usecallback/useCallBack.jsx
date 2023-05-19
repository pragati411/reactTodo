import { useCallback, useState } from "react";
import ChildComp from "./child";

const Day14UseCallback = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const updateCounter1 = useCallback(() => {
    setCounter1((prevState) => prevState + 1);
  }, []);

  const updateCounter2 = useCallback(() => {
    setCounter2((prevState) => prevState + 1);
  }, []);

  console.log("Parent Re-render");
  return (
    <>
      <p>Counter1: {counter1} </p>
      <p>Counter2: {counter2}</p>

      <ChildComp counter={counter2} onClick={updateCounter2} />

      <button onClick={updateCounter1}>Increment Counter 1 </button>
      {/*
       */}
    </>
  );
};

export default Day14UseCallback;
