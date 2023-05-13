import { useState } from "react";
import Child from "./child";
function P1() {
  const [count, setCount] = useState(0);
  console.log("parent rendering");
  return (
    <div>
      <Child />
      <p>parent component</p>

      <button
        onClick={() => {
          setCount((lastState) => lastState + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
}
export default P1;
