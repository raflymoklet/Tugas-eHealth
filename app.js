const express = require("express");
const app = express();
const path = require("path");

// Set view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Define a route
app.get("/hello", (req, res) => {
  res.send("Hello, world!");
});

// Define routes
app.get("/", async (req, res) => {
  const request = await fetch("https://api.staging.ehealth.id/fhir/Condition/263361");
  const data = await request.json();
  res.render("index", {
    data: data.code.coding,
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
