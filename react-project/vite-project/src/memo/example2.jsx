import { useEffect, useState } from "react";

const UseMemoExample2 = () => {
  const [name, setName] = useState("");
  // const [number, setNumber] = useState(0);
  let counter = 0;
  useEffect(() => {
    for (let i = 1; i <= 100; i++) {
      console.log("I: ", i);
      counter += i;
    }
    // setNumber(counter);
  }, []);

  console.log("Re-render");

  return (
    <>
      <p>
        Counter:{counter} {name}
      </p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </>
  );
};

export default UseMemoExample2;
