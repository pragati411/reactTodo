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
      <span key={id}>
        <li>'Repo Name {name}</li>

        <li>Fork{fork}</li>
        <li>Visibilty:{visibility}</li>
        <li>Default Branch:{default_branch}</li>
        <li>Description:{description}</li>
      </span>
    </>
  );
};
