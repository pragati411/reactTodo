import { useState } from "react";
import { useEffect } from "react";

export const GitProfile = ({ id }) => {
  const [follower, setFollower] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => setFollower((last) => [data]));
  }, []);

  return (
    <div>
      {follower.map((item) => {
        return (
          <>
            <div>
              <img src={item.avatar_url} alt="" width="100px" height="100px" />
            </div>
            <div>Name:{item.name}</div>
            <div>No of Following: {item.following}</div>
            <div>No of Followers: {item.followers}</div>
          </>
        );
      })}
    </div>
  );
};
