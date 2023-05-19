import { useState } from "react";
import { v4 } from "uuid";

export const GoogleForm = () => {
  const [getSelectPlace, setSelect] = useState(""); //placeholder
  const [inputField, setInputField] = useState([]);
  const [dropdown, setdropdown] = useState("");
  const [print, setPrint] = useState("");
  const generate = () => {
    {
      setInputField((prevState) => [
        ...prevState,
        {
          id: v4(),
          type: dropdown,
          placeholder: getSelectPlace,
        },
      ]);
    }
  };
  console.log(inputField);
  const updateArr = (ids) => {
    console.log(inputField[0].id, ids);
    if (inputField[0].id == ids) {
      console.log(inputField[0].id);
      inputField[0].data = capture;
    }
  };
  return (
    <>
      <select value={dropdown} onChange={(e) => setdropdown(e.target.value)}>
        <option value="text">Name</option>
        <option value="password">Password</option>
        <option value="date">Dob</option>
        <option value="email">Email</option>
        <option value=""></option>
      </select>
      <input
        name="placeHolder"
        value={getSelectPlace}
        onChange={(e) => setSelect(e.target.value)}
      />
      <button onClick={generate}>Next</button>
      {inputField.map((item) => {
        return (
          <input
            type={item.type}
            key={item.id}
            placeholder={item.placeholder}
            value={print}
            onChange={(e) => {
              setPrint(e.target.value);
              updateArr(item.id);
            }}
          />
        );
      })}
      <p>{print}</p>
    </>
  );
};
