import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <p>
        You have landed to an error page. Please use below buttons to navigate
      </p>

      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/blog">Blog</Link>
    </>
  );
};

export default Error;
