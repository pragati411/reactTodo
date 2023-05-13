import { useContext } from "react";
import { userProfileContext } from "./A";

const C = () => {
  const userName = useContext(userProfileContext);
  console.log("3");
  return (
    <>
      <p>I'm from this state {userName}</p>
    </>
  );
};

export default C;
