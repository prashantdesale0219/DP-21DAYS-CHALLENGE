import React, { useState } from "react";
import jsPDF from "jspdf";

const App = () => {
  const [title, setTitle] = useState("PDF Generator App");
  const [content, setContent] = useState("This is a simple PDF document generated using React and jsPDF.");

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(title, 20, 20);
    doc.setFontSize(14);
    doc.text(content, 20, 30);
    doc.save("generated.pdf");
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "90vh",
      padding: "16px",
      background: "linear-gradient(to right, #7F00FF, #E100FF)",
      color: "white",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "16px",
      padding: "12px",
      backgroundColor: "white",
      color: "black",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    input: {
      border: "1px solid white",
      backgroundColor: "transparent",
      padding: "12px",
      marginBottom: "12px",
      width: "100%",
      maxWidth: "400px",
      borderRadius: "8px",
      color: "white",
      outline: "none",
    },
    button: {
      backgroundColor: "#FFD700",
      color: "black",
      padding: "12px 20px",
      borderRadius: "50px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "transform 0.2s ease-in-out",
    },
    buttonHover: {
      transform: "scale(1.05)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>React PDF Generator</h1>
      <input
        type="text"
        style={styles.input}
        placeholder="Enter PDF Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        style={styles.input}
        placeholder="Enter PDF Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.transform = styles.buttonHover.transform)}
        onMouseOut={(e) => (e.target.style.transform = "none")}
        onClick={generatePDF}
      >
        Download PDF
      </button>
    </div>
  );
};

export default App;