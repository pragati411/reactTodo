import { memo } from "react";
const ChildComp = (props) => {
  console.log("child re-rendering in prop");
  return (
    <>
      <p>{props.counter}</p>
      <button onClick={props.onClick}> Counter 2</button>
    </>
  );
};
export default memo(ChildComp);
