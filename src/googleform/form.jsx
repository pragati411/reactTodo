import { useState } from "react";
import { v4 } from "uuid";

export const GoogleForm2 = () => {
  const [getSelectPlace, setSelect] = useState("");
  const [inputField, setInputField] = useState([]);
  const [showResult, setShowResult] = useState([]);
  const [dropdown, setdropdown] = useState("");
  const [capture, setCapture] = useState("");
  const generate = () => {
    {
      setInputField((lastState) => [
        ...lastState,
        {
          id: v4(),
          type: dropdown,
          placeholder: getSelectPlace,
        },
      ]);
    }
  };
  console.log(inputField);
  const updateArr = (grab, ids) => {
    setCapture(grab);

    inputField.map((smt) => {
      console.log(smt);
      if (smt.id == ids) {
        smt.data = capture;
      }
    });
  };
  const showMe = () => {
    setShowResult(inputField);
  };
  console.log(showResult);
  return (
    <>
      <select value={dropdown} onChange={(e) => setdropdown(e.target.value)}>
        <option value="text">Text Field</option>
        <option value="password">Password</option>
        <option value="date">Dob</option>
      </select>
      <input
        name="placeHolder"
        value={getSelectPlace}
        onChange={(e) => setSelect(e.target.value)}
      />
      <button onClick={generate}>Create</button>
      {inputField.map((item) => {
        return (
          <input
            type={item.type}
            key={item.id}
            placeholder={item.placeholder}
            onChange={(e) => {
              updateArr(e.target.value, item.id);
            }}
          />
        );
      })}
      <button onClick={showMe}>Submit</button>
      {showResult.map((item) => {
        return <li key={item.key}>{item.data}</li>;
      })}
    </>
  );
};
