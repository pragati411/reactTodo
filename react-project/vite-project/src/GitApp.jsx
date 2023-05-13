import { createBrowserRouter as R, RouterProvider } from "react-router-dom";
import { GitRepo } from "./gitRepo";
import { RepoList } from "./GitPage";
import { Profile } from "./GitData";
const router = R([
  {
    path: "/",
    element: <RepoList />,
  },
  {
    path: "/gitData",
    element: <Profile />,
  },

  {
    path: "/gitRepo",
    element: <GitRepo />,
  },
]);
export const MainPage = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
