import { useEffect } from "react";
import { useState } from "react";

import { Link, useSearchParams } from "react-router-dom";
import { GitProfile } from "./gitProfile";
export const GetProfile = () => {
  const [searchNumber, setSearch] = useSearchParams({ userId: undefined });
  const myNum = searchNumber.get("userId");

  const [inputData, setInputData] = useState("");
  const [userInfo, setuserInfo] = useState([]);
  const [repoData, setRepoData] = useState([]);

  const [fetchData, setFetchData] = useState(false);
  console.log(searchNumber.get("userId"));

  useEffect(() => {
    fetch(`https://api.github.com/users/${myNum}/repos`)
      .then((data) => data.json())
      .then((data) => setuserInfo(data));
  }, [fetchData]);

  const SearchRepoResult = (repoId) => {
    userInfo.map((item) => {
      if (item.id === repoId) {
        console.log(" inside");

        setRepoData((pre) => [...pre, item]);
      }
    });
  };
  const triggerAPI = () => {
    if (fetchData) {
      setFetchData(false);
    } else if (!fetchData) {
      setFetchData(true);
    }
  };

  return (
    <>
      <h3>Enter GitHub User Id </h3>

      <input
        type="text"
        value={inputData}
        placeholder="Enter Github UserId"
        onChange={(e) => {
          setInputData(e.target.value);
          setSearch({ userId: e.target.value });
        }}
      />
      <button onClick={triggerAPI}>Search</button>
      {<GitProfile id={myNum} />}

      <ul>
        {repoData.map((item) => {
          return (
            <>
              <Link
                to={{
                  pathname: "/getRepoData",
                  state: "data", // your data array of objects
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
                Repositary Details
              </Link>
            </>
          );
        })}
      </ul>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "10px",
          padding: "10px",
          border: "1px solid black",
          backgroundColor: "antiquewhite",
          justifyContent: "center",
        }}
      >
        {userInfo.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                width: "30%",
                flexDirection: "column",
                flexWrap: "wrap",
                margin: "10px",
                padding: "10px",
                border: "1px solid black",
                backgroundColor: "aliceblue",
                fontFamily: "sans-serif",
                fontSize: "25px",
              }}
            >
              <div onClick={() => SearchRepoResult(item.id)}>{item.name}</div>

              <div>{item.description}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
