const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db.config");
const authRoute = require("./routes/user.route");
const productRoute = require("./routes/product.route");

dotenv.config();
app.use(express.json());
app.use(cors());

connectDB();

const PORT = process.env.PORT || 4050;

app.use("/api", authRoute);
app.use("/api", productRoute);

app.listen(PORT, () => {
  console.log("Server is Running on Port " + PORT);
});
