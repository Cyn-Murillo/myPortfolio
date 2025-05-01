import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidenavStyle = {
    height: "100%",
    width: isOpen ? "125px" : "0",
    position: "fixed",
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: "#593d59",
    opacity: 0.8,
    overflowX: "hidden",
    transition: "0.5s",
    paddingTop: "60px",
  };

  const linkStyle = {
    padding: "8px 32px",
    textDecoration: "none",
    fontSize: "18px",
    color: "#e9dfe9",
    display: "block",
    transition: "0.3s",
  };

  const overlayCloseBtn = {
    position: "absolute",
    top: 0,
    right: "10px",
    fontSize: "24px",
    color: "white",
    border: "none",
    background: "transparent",
    cursor: "pointer",
  };

  const openButtonStyle = {
    color: "white",
    backgroundColor: "#979797",
    opacity: 0.8,
    border: "none",
    padding: "10px",
    margin: "10px",
    fontSize: "14px",
    cursor: "pointer",
    borderRadius: "5px",
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)} style={openButtonStyle}>
        &#9776; Menu
      </button>

      <div style={sidenavStyle}>
        <button onClick={() => setIsOpen(false)} style={overlayCloseBtn}>
          &times;
        </button>
        <Link to="/" style={linkStyle} onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/about" style={linkStyle} onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="/projects" style={linkStyle} onClick={() => setIsOpen(false)}>
          Projects
        </Link>
        <Link to="/resume" style={linkStyle} onClick={() => setIsOpen(false)}>
          Resume
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
