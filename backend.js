const express = require("express");
const cors = require("cors");
const app = express();

// Define PORT
const PORT = process.env.PORT || 3080;

// Enable Cors
app.use(cors());

// Get List of country data
app.get("/", (req, res) => {
  setTimeout(() => {
    res.json([
      ["Botswana", 252971],
      ["Zambia", 100],
      ["Lesotho", 557005],
      ["Zimbabwe", 30],
      ["Mozambique", 1],
      ["Namibia", 3],
      ["Malawi", 9],
      ["Kenya", 1],
    ]);
  }, 300); //Set timeout default = 300 mils
});

// Serve app
app.listen(PORT, () => {
  console.log(`App has started on port: ${PORT}`);
});
