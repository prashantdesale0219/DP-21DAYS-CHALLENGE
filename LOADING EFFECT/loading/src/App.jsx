import { useState } from "react";
import { ClipLoader } from "react-spinners";

export default function FileSharingApp() {
  const [loading, setLoading] = useState(false);

  const buttonStyle = {
    background: "linear-gradient(45deg, #ff0099, #493240, #00dbde, #fc00ff)",
    backgroundSize: "400% 400%",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    animation: "gradientAnimation 5s infinite linear",
  };

  const hoverStyle = {
    transform: "scale(1.1)",
    boxShadow: "0px 4px 20px rgba(255, 0, 153, 0.5)",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        onClick={() => setLoading(!loading)}
        style={buttonStyle}
        onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
        onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
      >
        {loading ? <ClipLoader color="white" size={20} /> : "Click Me"}
      </button>
    </div>
  );
}
