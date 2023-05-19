import { useEffect, useState } from "react";
import { getUserProfile } from "../utils";

const MultiRenderingIssue = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const userProfile = getUserProfile();
    setProfile(userProfile);
  }, []);

  console.log("Re-render");

  return (
    <>
      <p>Profile Details</p>
      <p>
        {profile.id}-{profile.name}
      </p>
    </>
  );
};

export default MultiRenderingIssue;
