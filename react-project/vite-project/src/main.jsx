import React from "react";

import ReactDOM from "react-dom/client";
import { GetProfile } from "./gitHub";
import { RepoList } from "./GitPage";
import { GitProfile } from "./gitProfile";

import SearchQueryParams from "./UseSearchParm";

ReactDOM.createRoot(document.getElementById("root")).render(<RepoList />);
