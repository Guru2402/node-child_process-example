var express = require("express"),
  app = express(),
  cp = require("child_process"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost/child_process");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  var child = cp.fork("./child.js");
  console.time("hello");

  child.on("message", function(i) {
    // Receive results from child process
    console.log("received sum is: " + i);
  });

  // Send child process some work
  child.send("Add 1000 numbers ------- Msg from parent to child");

  // Parent
  console.log("Parent going to end ");
  res.json("Review your console");
});

app.listen(8082, function() {
  console.log("server started at 8082.......");
});
