import { useState } from "react";

const UseMemoExample1 = () => {
  const [name, setName] = useState("");

  let counter = 0;
  for (let i = 1; i <= 10; i++) {
    console.log("I: ", i);
    counter += i;
  }

  return (
    <>
      <p>
        Counter:{counter} {name}
      </p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </>
  );
};

export default UseMemoExample1;
