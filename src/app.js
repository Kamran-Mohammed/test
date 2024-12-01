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

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
