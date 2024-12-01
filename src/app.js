const express = require("express");
const middleware = require("./app1");
const cors = require("cors");

const app = express();

// Middleware for CORS and parsing JSON
app.use(cors());
app.use(express.json());

// Custom middleware
app.use(middleware);

// Routes
app.get("/helloHiii", (req, res) => res.send("Hello hi World!"));
app.get("/hello", (req, res) => res.send("Hello World!"));
app.get("/all", (req, res) => res.send("Hello all!"));
app.get("/pets", (req, res) => {
  const { query } = req; // Extract query parameters

  // Example response using query
  res.json({
    message: "List of pets retrieved",
    filters: query,
    timestamp: new Date().toISOString(),
  });
});
app.post("/pets", (req, res) => {
  const { body } = req; // Extract request body

  // Example response using request body
  res.json({
    message: "New pet added successfully",
    petDetails: body,
    timestamp: new Date().toISOString(),
  });
});
app.put("/pets/:id", (req, res) => {
  const { params, body } = req; // Extract route parameters and request body

  // Example response using route parameters and body
  res.json({
    message: `Pet with ID ${params.id} updated successfully`,
    updatedDetails: body,
    timestamp: new Date().toISOString(),
  });
});
app.delete("/pets/:id", (req, res) => {
  const { params, headers } = req; // Extract route parameters and headers

  // Example response using headers and route parameters
  res.json({
    message: `Pet with ID ${params.id} deleted successfully`,
    requestedBy: headers["user-agent"], // Example: Log the client
    timestamp: new Date().toISOString(),
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
