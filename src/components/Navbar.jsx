import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: "relative", margin: 0, padding: 0 }}>
      <button onClick={() => setIsOpen(true)} className={"menu-button"}>
        <span className="menu-icon"></span>
      </button>

      <div className={isOpen ? "sidenav open" : "sidenav"}>
        <button onClick={() => setIsOpen(false)} className={"close-button"}>
          &times;
        </button>
        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>
          Projects
        </Link>
        <Link to="/resume" className="nav-link" onClick={() => setIsOpen(false)}>
          Resume
        </Link>
      </div>


      <div className={isOpen ? "sidenav open" : "sidenav"}>
        <button onClick={() => setIsOpen(false)} className={"close-button"}>
          &times;
        </button>
        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/resume" className="nav-link" onClick={() => setIsOpen(false)}>Resume</Link>

        <div className="social-links sidebar-social">
          <a href="https://www.linkedin.com/in/cynthia-murillo25/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/Cyn-Murillo/" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.hackerrank.com/profile/cmurill9" target="_blank" rel="noreferrer"><i className="fab fa-hackerrank"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
