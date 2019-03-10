var express = require("express");
var app = express();
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/YourDB", {
  useNewUrlParser: true
});
var body = require('body-parser');
app.use(body.urlencoded({
  extended: true
}));
app.use(express.static("Public"));
// app.use(express.static("views"));
app.set("view engine", "ejs");
var campground = [{
    name: "Rishabh Jain",
    image: "1.png"
  },
  {
    name: "Aman Jain",
    image: "2.jpg"
  },
  {
    name: "Goutam Jain",
    image: "3.jpg"
  }
];

app.get("/", function(req, res) {
  res.render("landing");
});
app.get("/campground", function(req, res) {
  res.render("campground", {
    campground: campground
  });
});

app.post("/campground", function(req, res) {
  // res.send("Hey This is Saved");
  var name1 = req.body.name;
  var image1 = req.body.image;
  var newcamp = {
    name: name1,
    image: image1
  };
  campground.push(newcamp);
  res.redirect("/campground");
});

app.get("/campground/new", function(req, res) {
  res.render("new");
});
app.listen(3000, function() {
  console.log("Hey Your Server is Started");
});
