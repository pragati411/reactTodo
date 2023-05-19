import { useMemo, useState, useEffect } from "react";
import { isMatchingCharacter } from "./add-function";

export const AsyncExampleGood = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json"
    )
      .then((data) => data.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const filteredCountries = useMemo(() => {
    console.log(countries);
    const result = countries.filter((item) => {
      const { name } = item;

      if (isMatchingCharacter(name, search)) {
        return true;
      }

      return false;
    });

    return result;
  }, [search, countries]);

  return (
    <>
      <div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div>
        <h1>Countries</h1>
        <ul>
          {filteredCountries.map((item) => {
            return <li>{item.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
