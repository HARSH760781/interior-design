const express = require("express");
const hbs = require("hbs");
const path = require("path");
const mongoose = require("mongoose");
const toastr = require("toastr");
const nodemailer = require("nodemailer");
const app = express();

const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://hj760781:12345yuiop@cluster0.gwbmhie.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
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

const transporter = nodemailer.createTransport({
  service: "Gmail", // You can use other services like 'Yahoo', 'Outlook', etc.
  auth: {
    user: "hjais2009@gmail.com", // Your email address
    pass: "jsfq kgsc xtjt dpri", // Your email password or app password
  },
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

    const mailOptions = {
      from: "oracleeinfra@gmail.com", // Sender address
      to: email,
      subject: "Welcome to Orclee Infra Company ⭐", // Subject line
      text: `Dear ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you soon.\n\nPhone: ${phone}\n\nMessage: ${message}\n\nBest regards,\n Orclee Infra `, // Plain text body
      // You can also use 'html' property to send an HTML email
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Failed to send email." });
      } else {
        res.redirect("/success");
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    console.log(error);
    res.redirect("/error");
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
