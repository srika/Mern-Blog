const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");

const app = express();

// DB Config
const MONGO_URL = require("./config/keys").MONGO_URL;
const MONGO_DB_USER = require("./config/keys").MONGO_DB_USER;
const MONGO_DB_PASSWORD = require("./config/keys").MONGO_DB_PASSWORD;

// Connect to MongoDB
mongoose
  .connect(
    MONGO_URL,
    {
      auth: {
        user: MONGO_DB_USER,
        password: MONGO_DB_PASSWORD
      },
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//app.get("/", (req, res) => res.send("Hello World"));

// Use Routes
app.use("/api/users", users);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
