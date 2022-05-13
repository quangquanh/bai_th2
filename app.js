const express = require("express");
var app = express();
const port = 3000;
app.get("/", (req, res) =>
  res.json({ messenger: "API is running in port 3000" })
);
app.listen(port, () => console.log("app running in http://localhost:3000"));
