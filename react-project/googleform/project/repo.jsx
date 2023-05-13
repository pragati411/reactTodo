import React, { useState } from "react";
import DataRepo from "./index";

const Repo = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
     console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (
    <>
      <div style={{ padding: 20 }}>
        <div>
          <div>
            <input
              placeholder="search username here..."
              type="text"
              value={username}
              onChange={onChangeHandler}
            />
          </div>

          <button type="submit" onClick={submitHandler}>
            Search
          </button>
          <DataRepo data={data} repositories={repositories} />
        </div>
      </div>
    </>
  );
};
export default Repo;
