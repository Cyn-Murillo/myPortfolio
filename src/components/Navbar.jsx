import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="top-nav">
      <div className="nav-brand">Cynthia Murillo</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
      </div>
      <div className="social-links top-nav-social">
        <a href="https://www.linkedin.com/in/cynthia-murillo25/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/Cyn-Murillo/" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://www.hackerrank.com/profile/cmurill9" target="_blank" rel="noreferrer"><i className="fab fa-hackerrank"></i></a>
      </div>
    </nav>
  );
}

export default Navbar;


