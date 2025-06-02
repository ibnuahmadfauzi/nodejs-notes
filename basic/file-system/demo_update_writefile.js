var fs = require("fs");
fs.writeFile(
  "mynewfile3.txt",
  "File mynewfile3.txt sudah diganti!",
  function (err) {
    if (err) throw err;
    console.log("File diganti!");
  }
);
