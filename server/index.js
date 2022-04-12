const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 3001;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
