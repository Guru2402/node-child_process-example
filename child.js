process.on("message", function(m) {
  console.log("========child.js begin here========");
  // Do work
  console.log(m);
  var a = 0;
  for (var i = 0; i < 1000; i++) {
    console.log(i);
    a = a + i;
  }

  // Pass result back to parent process
  process.send(a);
});
