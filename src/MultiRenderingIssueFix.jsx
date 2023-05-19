import { useLoaderData } from "react-router-dom";

const MultiRenderingIssueFix = () => {
  const profile = useLoaderData();

  console.log("Re-render", profile);

  return (
    <>
      <p>Profile Details</p>
      <p>
        {profile.id}-{profile.name}
      </p>
    </>
  );
};

export default MultiRenderingIssueFix;
