const express = require("express");
const app = express();

const dotenv = require("dotenv");
const connectDb = require("./db/db");
const weaponRouter = require("./routes/weapon.route");
const cors = require("cors");

app.use(cors());

app.use(express.json());

dotenv.config();

connectDb();

const PORT = process.env.PORT || 3000;

app.use("/api", weaponRouter);

app.listen(PORT, () => {
  console.log("Server is running" + PORT);
});
