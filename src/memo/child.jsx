import { memo } from "react";
export default memo(function Child() {
  {
    console.log("rendering");
  }

  return <p>im child component</p>;
});
