const express = require("express");
const app = express();

app.get("/helloHi", (req, res) => res.send("Hello World!"));
app.listen(3000, () => console.log("Server running on port 3000"));
