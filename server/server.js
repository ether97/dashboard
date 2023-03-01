const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const PORT = 5000;

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  try {
    console.log(`Server listening on port ${PORT} `.yellow.bgBlack);
    connectDB();
  } catch (error) {
    console.log(error);
  }
});
