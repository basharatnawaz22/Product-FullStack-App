const express = require("express");
const cors = require("cors");

const app = express();

// const corOptions = {
//   origin: "http://localhost:8081",
// };

// middlewares
// app.use(cors(corOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// product router
const productRouter = require("./routes/productRouter");
app.use("/api/products", productRouter);

// review router
const reviewRouter = require("./routes/reviewRouter");
app.use("/api/reviews", reviewRouter);

// testing api
app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

//port
const PORT = process.env.PORT || 8081;

//server
app.listen(PORT, () => console.log(`server is running on port : ${PORT}`));
