const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();

const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
