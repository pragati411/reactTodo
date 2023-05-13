import { useContext } from "react";
import { userProfileContext } from "./A";
import C from "./C";

const B = () => {
  const userName = useContext(userProfileContext);
  console.log("2");
  return (
    <>
      <p>I'm from this city {userName}</p>
      <C />
    </>
  );
};

export default B;
