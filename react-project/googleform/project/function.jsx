import { useState } from "react";
import { GitRepo } from "./gitrepo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
export const GetProfile = () => {
  const [inputData, setInputData] = useState("");
  const [userInfo, setuserInfo] = useState([]);
  const [repoData, setRepoData] = useState([]);
  const findUser = () => {
    fetch(`https://api.github.com/users/${inputData}/repos`)
      .then((data) => data.json())
      .then((data) => setuserInfo(data));
  };
  const showMeRepo = (repoId) => {
    userInfo.map((item) => {
      if (item.id === repoId) {
        setRepoData((pre) => [...pre, item]);
      }
    });
  };
  return (
    <>
      <h3>Enter User Information:</h3>
      <input
        type="text"
        value={inputData}
        placeholder="Enter Github UserId"
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={findUser}>Find</button>
      <ul>
        {userInfo.map((item) => {
          return (
            <span key={item.id}>
              <li onClick={() => showMeRepo(item.id)}>{item.name}</li>
              <li>{item.id}</li>
              <li>{item.description}</li>
              <li>
                <img
                  src={item.owner.avatar_url}
                  alt=""
                  width="150px"
                  height="150px"
                />
              </li>
            </span>
          );
        })}
      </ul>
      <ul>
        {repoData.map((item) => {
          return (
            <>
              <Link key={item.id} to="/gitrepo">
                <GitRepo
                  key={item.id}
                  name={item.name}
                  fork={item.fork}
                  visibility={item.fork}
                  default_branch={item.default_branch}
                  description={item.description}
                />
                ``
              </Link>
            </>
          );
        })}
      </ul>
    </>
  );
};
