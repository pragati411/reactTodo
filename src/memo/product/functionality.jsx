import { useMemo, useState } from "react";
import { products } from "./products";
import { isMatchingCharacter } from "./add-function";

const CountriesSearch = () => {
  const [country, setCountries] = useState(products);
  const [search, setSearch] = useState("");

  const filteredResult = useMemo(() => {
    const result = country.filter((item) => {
      const { name, code } = item;

      if (isMatchingCharacter(name, search)) {
        return true;
      }

      if (isMatchingCharacter(code, search)) {
        return true;
      }

      return false;
    });

    console.log(result);
    return result;
  }, [search]);

  console.log("Re-Rendering");
  return (
    <>
      <div>
        <input
          type={"search"}
          placeholder="Search products"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <h1>Countries</h1>
        <ul>
          {filteredResult.map((item) => {
            return <li key={item.code}>{item.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default CountriesSearch;
