import { useMemo, useState, useEffect } from "react";
import { isMatchingCharacter } from "./add-function";

export const Day13AsyncExampleGood = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const filteredProducts = useMemo(() => {
    const result = products.filter((item) => {
      const { title, description, category } = item;

      if (isMatchingCharacter(title, search)) {
        return true;
      }

      if (isMatchingCharacter(description, search)) {
        return true;
      }

      if (isMatchingCharacter(category, search)) {
        return true;
      }

      return false;
    });

    return result;
  }, [search, products]);

  console.log("Re-render", products, filteredProducts);

  return (
    <>
      <div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div>
        <h1>My Products</h1>
        <ul>
          {filteredProducts.map((item) => {
            return <li>{item.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
