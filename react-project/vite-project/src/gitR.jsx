import { useLocation } from "react-router-dom";
export const GitRepo = ({
  id,
  name,
  fork,
  visibility,
  default_branch,
  description,
}) => {
  return (
    <>
      <div key={id}>
        <div>'Repo Name {name}</div>

        <div>Fork{fork}</div>
        <div>Visibilty:{visibility}</div>
        <div>Default Branch:{default_branch}</div>
        <div>Description:{description}</div>
      </div>
    </>
  );
};
