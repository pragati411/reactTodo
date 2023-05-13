import React, { useState } from "react";
import ChildNode from "./childnode";

export default function NestedObject() {
  const [nodes, setNodes] = useState([
    {
      name: "Fruit",
      children: [
        {
          name: "Apple",
          children: [
            {
              name: "Himachali",
              children: [{ name: "Kashmiri", children: [] }],
            },
          ],
        },
        { name: "Banana", children: [] },
        { name: "grapes", children: [] },
      ],
    },
    {
      name: "Vegetables",
      children: [
        {
          name: "Green",
          children: [{ name: "spinch" }, { name: "Brussels sprouts" }],
        },
        {
          name: "Orange",
          children: [{ name: "Pumpkins" }, { name: "Carrots" }],
        },
      ],
    },
  ]);

  return (
    <div>
      <ChildNode nodes={nodes} />
    </div>
  );
}
