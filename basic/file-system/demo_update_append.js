var fs = require("fs");
fs.appendFile("mynewfile1.txt", ". Ini konten baru.", function (err) {
  if (err) throw err;
  console.log("File diperbarui!");
});
