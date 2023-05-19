import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Blog = () => {
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
      <p>Blog Component {params.id}</p>

      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
    </>
  );
};

export default Blog;