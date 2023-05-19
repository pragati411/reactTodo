import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <p>Home Component</p>

      <Link to="/about">About</Link>
      <br />
      <Link to="/blog">Blog</Link>
    </>
  );
};

export default Home;
