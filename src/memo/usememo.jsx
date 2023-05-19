import { useMemo } from "react";

const LoopUpToMemo = () => {
  const counter = useMemo(() => {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
      count += i;
    }

    return count;
  });

  console.log("Re-Render");

  return (
    <>
      <p>Counter: {counter}</p>
    </>
  );
};

export default LoopUpToMemo;
