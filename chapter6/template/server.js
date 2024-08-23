const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.get("/form", (req, res) => {
  res.render("form");
});

app.post("/home", (req, res) => {
  const { name, lastname } = req.body;
  console.log(req.body);

  res.render("index", { name, lastname });
});

let arr = [
  {
    id: 1,
    product: "product 1",
    desc: "product item",
    price: 500,
  },

  {
    id: 2,
    product: "product 2",
    desc: "product item",
    price: 450,
  },
  {
    id: 3,
    product: "product 3",
    desc: "product item",
    price: 220,
  },
];

app.get("/products", (req, res) => {
  res.render("products", { arr });
});

app.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  arr = arr.filter((item) => item.id !== id);
  res.status(200).json("DELETED");
});

app.listen(port, () => {
  console.log("server is running");
});
