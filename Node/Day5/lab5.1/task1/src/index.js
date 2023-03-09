const express = require("express");
require("./db/mongoose");
const customerRouter = require("./routers/customer");
const productRouter = require("./routers/product");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(customerRouter);
app.use(productRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
