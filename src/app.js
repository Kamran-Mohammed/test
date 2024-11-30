const express = require("express");
const app = express();

app.get("/helloHiii", (req, res) => res.send("Hello World!"));
app.get("/hello", (req, res) => res.send("Hello World!"));
app.listen(3000, () => console.log("Server running on port 3000"));
