import { createContext, useState } from "react";
import B from "./B";

export const userProfileContext = createContext(null);
const UserProfileProvider = userProfileContext.Provider;

const AComponent = () => {
  const [userName, setUserName] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  console.log("1");
  return (
    <UserProfileProvider value={userName}>
      <div>
        <div>
          <p>my name is pragati</p>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <B />
      </div>
    </UserProfileProvider>
  );
};

export default AComponent;
