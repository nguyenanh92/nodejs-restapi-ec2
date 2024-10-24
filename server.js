require("dotenv").config();

const express = require("express");
const cors = require("cors");

const errorHandler = require("./middlewares/error");


// Express App
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

app.use("/api/products", (req, res) => {
  return res.status(200).json({
    message: 'This is new feature change, a new route for products'
  })
});

app.use(errorHandler);

const server = app.listen(port, () =>
  console.log(`Server started listening on ${port}`)
);

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1));
});
