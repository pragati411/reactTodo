export const GitRepo = ({
  id,
  name,
  fork,
  visibility,
  default_branch,
  description,
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        key={id}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          textAlign: "center",
          flexWrap: "wrap",
          margin: "10px",
          padding: "10px",
          border: "1px solid black",
          backgroundColor: "antiquewhite",
          justifyContent: "center",
        }}
      >
        <div>Repo Name {name}</div>

        <div>Fork{fork}</div>
        <div>Visibilty:{visibility}</div>
        <div>Default Branch:{default_branch}</div>
        <div>Description:{description}</div>
      </div>
    </div>
  );
};
