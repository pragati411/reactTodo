import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const RunParam = () => {
  const { id } = useParams();
  //console.log({ params });

  useEffect(() => {
    if (!id) return;

    fetch(`https://api.github.com/users/${id}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      });
  }, [id]);
  return (
    <>
      <p> {params.id}</p>

      <Link to="/">GitApp</Link>
      <br />
      <Link to="/GitPage">GitPage</Link>
    </>
  );
};
export default RunParam;
