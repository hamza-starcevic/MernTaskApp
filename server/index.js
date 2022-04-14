const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 3001;

mongoose.connect("mongodb+srv://Hamza:kenansin2002@cluster0.xs5dn.mongodb.net/BazaPodatakaRoditelji?retryWrites=true&w=majority")

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
