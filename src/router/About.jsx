import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <p>About Component</p>

      <Link to="/">Home</Link>
      <br />
      <Link to="/blog">Blog</Link>
    </>
  );
};

export default About;
