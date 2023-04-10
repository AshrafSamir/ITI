const express = require("express");
const app = express();
const PORT = process.env.PORT || 7000;
const cors = require("cors");
const express_GraphQL = require("express-graphql").graphqlHTTP;
const mongoose = require("mongoose");
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/library");
mongoose.connection.once("open", () => {
  console.log("Connected Successfully");
});

//EndPoint

// app.use("/student",StudentRoutes);//XXX
const mySchema = require("./Schema/schema");
app.use("/graphql", express_GraphQL({ schema: mySchema, graphiql: true }));

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT + "/graphql");
});
