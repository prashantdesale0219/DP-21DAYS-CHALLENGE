const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/roll", (req, res) => {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  res.json({ roll: diceRoll });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
