const express = require("express");
const app = express();

const testRoute = require("./routes/test.route");
const { testUrl } = require("./middlewares/test.middleware");


const PORT = 8080 || 5050;

app.use("/api", testUrl, testRoute);

app.listen(PORT, () => {
  console.log("Server is running");
});
