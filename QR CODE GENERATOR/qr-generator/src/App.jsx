import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeGenerator() {
  const [text, setText] = useState("Hello, World!");

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "90vh", padding: "20px", background: "linear-gradient(135deg, #667eea, #764ba2)" }}>
      <div style={{ padding: "20px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", backgroundColor: "#ffffff", borderRadius: "12px", textAlign: "center", maxWidth: "400px", width: "100%" }}>
        <h1 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "16px", color: "#4A4A4A" }}>QR Code Generator</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or URL"
          style={{ padding: "12px", border: "2px solid #764ba2", borderRadius: "6px", marginBottom: "16px", width: "90%", fontSize: "16px", color: "#333" }}
        />
        <div style={{ marginBottom: "16px", padding: "10px", background: "#f9f9f9", borderRadius: "8px" }}>
          <QRCodeCanvas value={text} size={200} />
        </div>
        <button
          onClick={() => setText("")}
          style={{ padding: "12px 24px", backgroundColor: "#ff4081", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "16px", transition: "0.3s", fontWeight: "bold" }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#d81b60")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4081")}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
