import { useLoaderData } from "react-router-dom";

const MultiRenderingIssueAsyncFix = () => {
  const profile = useLoaderData();
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

export default MultiRenderingIssueAsyncFix;
