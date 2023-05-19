import { useState } from "react";

const ChildNode = ({ nodes }) => {
  const [visibleNode, setVisibleNode] = useState({});
  const nestedItem = (i, item) => {
    setVisibleNode({
      ...visibleNode,
      [i]: !visibleNode[i],
    });
  };
  return (
    <>
      <ul>
        {nodes.map((item, i) => {
          return (
            <li key={i}>
              {item.children && item.children.length > 0 && (
                <button onClick={() => nestedItem(i, item)}>▶</button>
              )}
              {item.name}
              {visibleNode[i] && item.children.length > 0 && (
                <ChildNode nodes={item.children} />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ChildNode;
