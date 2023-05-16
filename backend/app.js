require("dotenv").config();
const express = require("express");
const cors = require("cors");

const postsRouter = require("./routes/posts");

const app = express();

app.use(cors());
app.use(express.json());
app.use(postsRouter);

app.listen(8000, () => {
  console.log("serveris running on port 8000");
});
