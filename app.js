const express = require("express");
const hbs = require("hbs");
const path = require("path");
const mongoose = require("mongoose");
const toastr = require("toastr");
const app = express();

const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/contact")
  .then(() => console.log("Database connected!!!"))
  .catch((err) => console.log(err));

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("User", user);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("About");
});
app.get("/Contact", (req, res) => {
  res.render("contact");
});
app.get("/error", (req, res) => {
  res.render("error");
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
app.get("/wooden-work", (req, res) => {
  res.render("wooden-work");
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
app.get("/flooring", (req, res) => {
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
app.get("/success", (req, res) => {
  res.render("success");
});
app.post("/form-submit", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Check if all required fields are present
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Save the data to the database
    const formData = new User({
      name,
      email,
      phone,
      message,
    });

    await formData.save();
    res.redirect("/success");
  } catch (error) {
    console.log(error);

    // Send an error response
    // res.status(500).json({
    //   message:
    //     "An error occurred while sending your message. Please try again.",
    // });
    res.redirect("/error");
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
