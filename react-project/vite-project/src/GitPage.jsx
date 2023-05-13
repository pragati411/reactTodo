import { useEffect } from "react";
import { useState } from "react";
import { GitRepo } from "./gitRepo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

export const RepoList = () => {
  const [searchInputData, setSearchInputData] = useState("");
  const [userDetails, setuserDeatails] = useState([]);
  const [repoData, setRepoData] = useState([]);
  const searchGitUser = () => {
    fetch(`https://api.github.com/users/${searchInputData}/repos`)
      .then((data) => data.json())
      .then((data) => setuserDeatails(data));
  };
  const displayRepositary = (userId) => {
    userDetails.map((item) => {
      if (item.id === userId) {
        setRepoData((last) => [...last, item]);
      }
    });
  };

  return (
    <>
      <h3>Enter GitHub Id</h3>
      <div>
        <input
          type="text"
          value={searchInputData}
          placeholder="Enter Github UserId"
          onChange={(e) => setSearchInputData(e.target.value)}
        />
      </div>
      <div>
        <button onClick={searchGitUser}>Search</button>
      </div>
      <div>
        {userDetails.map((item) => {
          return (
            <div key={item.id}>
              <div onClick={() => displayRepositary(item.id)}>{item.name}</div>

              <div>{item.description}</div>
              <div>
                <img
                  src={item.owner.avatar_url}
                  alt=""
                  width="250px"
                  height="250px"
                />
              </div>

              <Link
                to={{
                  pathname: "/gitData",
                  state: "", // your data array of objects
                }}
                state={{
                  id: item.id,
                  name: item.name,
                  fork: item.fork,
                  visibility: item.fork,
                  default_branch: item.default_branch,
                  description: item.description,
                }}
              >
                <GitRepo
                  key={item.id}
                  name={item.name}
                  fork={item.fork}
                  visibility={item.fork}
                  default_branch={item.default_branch}
                  description={item.description}
                />
              </Link>
            </div>
          );
        })}
      </div>
      {/* <ul>
        {repoData.map((item) => {
          return <></>;
        })}
      </ul> */}
    </>
  );
};
