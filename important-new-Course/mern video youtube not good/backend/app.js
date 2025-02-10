const express = require("express");
const consts = require("./Consts/variables");
const mongoose = require("mongoose");
const HttpError = require("./models/http-error");

const bookRoutes = require("./routes/book-routes");
const MyError = require("./models/http-error");
const app = express();

app.use(express.json());

app.use("/books", bookRoutes);

app.use((req, res) => {
  const error = MyError(res, 404, "could not find this route.");
  throw error;
});

mongoose
  .connect(consts.url)
  .then(() => {
    app.listen(consts.port);
    console.log("Success, Connected to database");
  })
  .catch((err) => {
    console.log("Failed ");
  });
