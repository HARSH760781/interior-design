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
app.get("/about", (req, res) => {
  res.render("About");
});
app.get("/Contact", (req, res) => {
  res.render("contact");
});
app.get("/Service", (req, res) => {
  res.render("Service");
});
app.get("/kitchen", (req, res) => {
  res.render("kitchen");
});
app.get("/electric-work", (req, res) => {
  res.render("electric-work");
});
app.get("/plumbing", (req, res) => {
  res.render("plumbing");
});
app.get("/bedroom", (req, res) => {
  res.render("bedroom");
});
app.get("/gypsum-ceiling", (req, res) => {
  res.render("gypsum-ceiling");
});
app.get("/painting", (req, res) => {
  res.render("painting");
});
app.get("/floring", (req, res) => {
  res.render("flooring");
});
app.get("/living-room", (req, res) => {
  res.render("living-room");
});
app.get("/bathroom", (req, res) => {
  res.render("bathroom");
});
app.get("/pooja", (req, res) => {
  res.render("pooja-room");
});
app.get("/curtains", (req, res) => {
  res.render("curtains");
});
app.get("/electronic-products", (req, res) => {
  res.render("electronic-products");
});
app.get("/interior-desing", (req, res) => {
  res.render("interior-design");
});
app.get("/Pages", (req, res) => {
  res.render("Page");
});
app.get("/interior-design", (req, res) => {
  res.render("interior-design");
});
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
