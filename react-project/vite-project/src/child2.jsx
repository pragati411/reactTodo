import React from "react";
// import { useEffect } from "react";
import { useState } from "react";

const ChildNode = ({ data }) => {
  const [visualData, setVisualData] = useState(false);

  const onNodeClick = (event) => {
    event.stopPropagation();
    setVisualData((prv) => !prv);
  };
  return (
    <li onClick={onNodeClick}>
      {data.name}

      {data.children && data.children.length > 0 && visualData && (
        <ChildData data={data.children} />
      )}
    </li>
  );
};

const ChildData = ({ data }) => {
  return (
    <>
      <ul>
        {data.map((item, position) => {
          return <ChildNode data={item} key={position} />;
        })}
      </ul>
    </>
  );
};
export default ChildData;
