const express = require("express");
const { default: mongoose } = require("mongoose");
const UserModel = require("./models/Users");
const app = express();

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Hamza:kenansin2002@cluster0.xs5dn.mongodb.net/BazaPodatakaRoditelji?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      console.error(err);
    }
    res.json(result);
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(3001, () => console.log(`Example app listening on port 3001!`));
