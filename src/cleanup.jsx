import { useState } from "react";
// import Day11Home from "./cleanup-function";
import Day11CleanupFunc from "./cleanupDepency";
const Day11App = () => {
  const [toggleView, setToggleView] = useState(false);

  return (
    <>
      <button onClick={() => setToggleView((state) => !state)}>
        {toggleView ? "Hide" : "Show"} Component
      </button>
      {toggleView && <Day11CleanupFunc />}
    </>
  );
};

export default Day11App;
