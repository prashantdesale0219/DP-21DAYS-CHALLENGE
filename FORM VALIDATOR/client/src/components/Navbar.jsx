import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: "#333",
      padding: "10px 20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      width:"100%"
    }}>
      <ul style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "0",
        margin: "0"
      }}>
       
        <li style={{ display: "inline" }}>
          <Link to="/users" style={linkStyle}>User List</Link>
        </li>
        <li style={{ display: "inline" }}>
          <Link to="/signup" style={linkStyle}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  padding: "8px 12px",
  borderRadius: "5px",
  transition: "background 0.3s ease-in-out",
};

const linkHoverStyle = {
  backgroundColor: "#555",
};

export default Navbar;
